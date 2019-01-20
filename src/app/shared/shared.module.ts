import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedLibsModule, SharedCommonModule } from './';

@NgModule({
  imports: [SharedLibsModule, SharedCommonModule],
  declarations: [],
  exports: [SharedCommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
