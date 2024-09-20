import { Component, inject, OnInit } from '@angular/core';
import { CustomFooterComponent } from '../shared/custom-footer/custom-footer.component';
import { CustomHeaderComponent } from '../shared/custom-header/custom-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CustomFooterComponent, CustomHeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  router: Router = inject(Router);
  ngOnInit(): void {
    setTimeout(() => this.router.navigate(['login']), 3000);
  }
}
