import { TestBed } from '@angular/core/testing';
import { ModelKitService } from './model-kit.service';


describe('MangaService', () => {
  let service: ModelKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
