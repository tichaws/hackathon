import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponentComponent } from './wallet-component.component';

const routes: Routes = [
    {
        path: '', component: WalletComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [WalletComponentComponent]
})
export class WalletRouting {
}
