import { Component } from '@angular/core';
import { NavComponentComponent } from "../nav-component/nav-component.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from "../footer/footer.component";
// import { NavComponentComponent } from '../nav-component/nav-component.component';
// import { BodyComponent } from '../body/body.component';
// import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-okiki-web',
  standalone: true,
  imports: [NavComponentComponent, BodyComponent, FooterComponent],
  templateUrl: './okiki-web.component.html',
  styleUrl: './okiki-web.component.css'
})
export class OkikiWebComponent {

}
