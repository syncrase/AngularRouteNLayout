import { NgModule } from '@angular/core';
import { RxjsModule } from './rxjs/rxjs.module';
import { StepSwitcherViewModule } from './step-switcher-view/step-switcher-view.module';
import { MergeMapDemoModule } from './merge-map-demo/merge-map-demo.module';
import { PriceSwitcherModule } from './price-switcher/price-switcher.module';
import { ConcatMapDemoModule } from './concat-map-demo/concat-map-demo.module';
import { MergeScanDemoModule } from './merge-scan-demo/merge-scan-demo.module';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';

@NgModule({
    declarations: [],
    imports: [
        RxjsModule,
        StepSwitcherViewModule,
        MergeMapDemoModule,
        PriceSwitcherModule,
        ConcatMapDemoModule,
        MergeScanDemoModule,
        AutoCompleteModule
    ]
})
export class ViewsModule { }
