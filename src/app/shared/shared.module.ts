import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SiteStepComponent } from "./site-step/site-step.component";

@NgModule({
    declarations: [
        SiteStepComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
    ],
    exports: [
        SiteStepComponent, 
        NgbModule
    ]
})
export class SharedModule {}