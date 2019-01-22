import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Footable2Service } from './footable2.service';

@Component({
  selector: 'app-footable2-bar-dialog',
  templateUrl: './footable2-bar-dialog.component.html',
  styleUrls: ['./footable2-bar-dialog.component.css']
})
export class Footable2BarDialogComponent implements OnInit {

  constructor(protected footable2Service: Footable2Service, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-footable2-bar-popup',
  template: ''
})
export class Footable2BarPopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ footable2 }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(Footable2BarDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.footable2 = footable2;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}



