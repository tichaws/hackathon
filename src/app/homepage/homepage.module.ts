// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }
];


@NgModule({
    imports: [
        [RouterModule.forChild(routes)]
    ],
    declarations: [
        HomepageComponent,
    ],
    exports: [
        HomepageComponent,
        RouterModule
    ]
})
export class HomepageModule {

}
