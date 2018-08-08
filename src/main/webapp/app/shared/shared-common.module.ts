import { NgModule } from '@angular/core';

import { RaviSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RaviSampleApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RaviSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RaviSampleApplicationSharedCommonModule {}
