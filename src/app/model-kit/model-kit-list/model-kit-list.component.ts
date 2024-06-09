import { Component } from '@angular/core';
import { IModelKit } from '../interface/manga.interface';
import { ModelKitService } from '../service/model-kit.service';
import { Store } from '@ngrx/store';
import { loadModelKit } from '../ngrx/action/model-kit.action';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-model-kit-list',
  standalone: true,
  imports: [],
  templateUrl: './model-kit-list.component.html',
  styleUrl: './model-kit-list.component.scss'
})
export class ModelKitListComponent {
  modelKitList$ = this.store.select(state => state.modelKit);
  modelKitList: Array<IModelKit> = [];
  private ngUnsubscribe = new Subject();

  constructor(private store: Store<{ modelKit: IModelKit[] }>) {
    // this.getData();
    this.store.dispatch(loadModelKit());
    this.modelKitList$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.modelKitList = data
      console.log('aa',this.modelKitList);
      
    })
  }
}
