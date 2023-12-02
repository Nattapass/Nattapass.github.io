import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
    imgUrl: new FormControl(''),
    type: new FormControl(''),
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
    if (this.selectedManga && this.selectedManga.no) {
      this.http
        .put(
          `https://service-collection-production.up.railway.app/manga/no/${this.selectedManga.no}`,
          this.listForm.value
        )
        .subscribe({
          next: (data) => {
            console.log('HTTP request successful', data);
            Swal.fire({
              title: 'Update Success!',
              text: '',
              icon: 'success',
            });
            // Handle the data or update component properties here
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Update Failed',
              text: error,
            });
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
            Swal.fire({
              title: 'Update Success!',
              text: '',
              icon: 'success',
            });
            this.listForm.reset();
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Update Failed',
              text: error,
            });
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
      imgUrl: this.selectedManga.imgUrl,
      type: this.selectedManga.type,
    });
  }
}
