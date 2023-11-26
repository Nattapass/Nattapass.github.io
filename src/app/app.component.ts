import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-collection';
  data: any;
  isShow = false;

  toggle() {
    this.isShow = !this.isShow;
    // ng build --output-path docs --base-href /repository-name/
  }
}
