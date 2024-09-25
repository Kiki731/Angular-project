import { Routes } from '@angular/router';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { OkikiWebComponent } from './okiki-web/okiki-web.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path: "", component: OkikiWebComponent
    },
    {
        path: "nav", component: NavComponentComponent
    },
    {
        path:"footer", component: FooterComponent
    }
];
