import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  router: Router = inject(Router)
  ngOnInit(): void {
    this.router.navigate(['signup']);
  }

  title = 'comecio-eletronico';
}
