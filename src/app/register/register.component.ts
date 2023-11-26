import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  listForm = new FormGroup({
    name: new FormControl(''),
    licence: new FormControl(''),
    startDate: new FormControl(''),
    lastUpDate: new FormControl(''),
    status: new FormControl(''),
    totalVol: new FormControl(''),
  });

  onSubmit() {
    this.http.post<any>('https://service-collection-production.up.railway.app/manga', this.listForm.value).subscribe(
      (data) => {
        console.log('HTTP request successful', data);
        // Handle the data or update component properties here
      },
      (error) => {
        console.error('HTTP request failed', error);
        // Handle the error here
      }
    );
  }
}
