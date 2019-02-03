import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    NgbModule,
    FontAwesomeModule],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule]
})
export class SharedLibsModule {
  static forRoot() {
    return {
      ngModule: SharedLibsModule
    };
  }
}
