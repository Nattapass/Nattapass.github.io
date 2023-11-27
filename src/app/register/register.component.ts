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
  listForm = new FormGroup({
    name: new FormControl(''),
    licence: new FormControl(''),
    startDate: new FormControl(''),
    lastUpDate: new FormControl(''),
    status: new FormControl(''),
    totalVol: new FormControl(''),
  });
  mangaList: any;
  selectedManga: any;

  constructor(private http: HttpClient) {
    this.getManga();
  }

  getManga() {
    this.http
      .get<any>('https://service-collection-production.up.railway.app/manga')
      .subscribe({
        next: (data) => {
          this.mangaList = data;
        },
        error: (error) => {
          console.error('HTTP request failed', error);
        },
      });
  }

  onSubmit() {
    console.log('lastUpDate ===>', this.listForm.value);

    if (this.selectedManga && this.selectedManga.no) {
      console.log('this.selectedManga.no', this.selectedManga.no);
      
      this.http
        .put(
          `https://service-collection-production.up.railway.app/manga/no/${this.selectedManga.no}`,
          this.listForm.value
        )
        .subscribe({
          next: (data) => {
            console.log('HTTP request successful', data);
            // Handle the data or update component properties here
          },
          error: (error) => {
            console.error('HTTP request failed', error);
            // Handle the error here
          },
        });
    } else {
      this.http
        .post<any>(
          'https://service-collection-production.up.railway.app/manga',
          this.listForm.value
        )
        .subscribe({
          next: (data) => {
            console.log('HTTP request successful', data);
            // Handle the data or update component properties here
          },
          error: (error) => {
            console.error('HTTP request failed', error);
            // Handle the error here
          },
        });
    }
  }

  onSelectManga(event: any) {
    const selectedIndex = event.target.value;
    this.selectedManga = this.mangaList[selectedIndex];
    console.log('selectedManga', this.selectedManga);

    this.listForm.setValue({
      name: this.selectedManga.name,
      licence: this.selectedManga.licence,
      startDate: this.selectedManga.startDate,
      lastUpDate: this.selectedManga.lastUpDate,
      status: this.selectedManga.status,
      totalVol: this.selectedManga.totalVol,
    });
  }
}
