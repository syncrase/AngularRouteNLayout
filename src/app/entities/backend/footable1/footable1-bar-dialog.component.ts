import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Footable1Service } from './footable1.service';

@Component({
  selector: 'app-footable1-bar-dialog',
  templateUrl: './footable1-bar-dialog.component.html',
  styleUrls: ['./footable1-bar-dialog.component.css']
})
export class Footable1BarDialogComponent implements OnInit {

  constructor(protected planteService: Footable1Service, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-footable1-bar-popup',
  template: ''
})
export class Footable1BarPopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ footable1 }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(Footable1BarDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.footable1 = footable1;
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



