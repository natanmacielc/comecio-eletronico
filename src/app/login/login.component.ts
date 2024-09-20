import { Component } from '@angular/core';
import { CustomFooterComponent } from '../shared/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from '../shared/custom-header/custom-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomFooterComponent, CustomHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
