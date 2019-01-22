import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Footable1Module as PremierModule } from './footable1/footable1.module';
import { Footable2Module as SecondModule } from './footable2/footable2.module';

@NgModule({
  imports: [
    PremierModule,
    SecondModule
  ],
  declarations: [],
  entryComponents: [],
  providers: []
  // ,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityModule {}
