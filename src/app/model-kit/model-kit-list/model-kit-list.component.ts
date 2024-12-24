import { Component } from '@angular/core';
import { IModelKit } from '../interface/manga.interface';
import { ModelKitService } from '../service/model-kit.service';
import { Store } from '@ngrx/store';
import { loadModelKit } from '../ngrx/action/model-kit.action';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-kit-list',
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbTypeaheadModule,],
  templateUrl: './model-kit-list.component.html',
  styleUrl: './model-kit-list.component.scss'
})
export class ModelKitListComponent {
  modelKitList$ = this.store.select(state => state.modelKit);
  modelKitList: Array<IModelKit> = [];
  page = 1;
  private ngUnsubscribe = new Subject();

  constructor(private store: Store<{ modelKit: IModelKit[] }>) {
  }

  ngOnInit() {
    this.store.dispatch(loadModelKit());
    this.modelKitList$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.modelKitList = data
      console.log('this.modelKitList')
    })
  }
}
