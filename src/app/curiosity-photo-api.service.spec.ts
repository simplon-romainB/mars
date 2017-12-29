/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CuriosityPhotoApiService } from './curiosity-photo-api.service';

describe('CuriosityPhotoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuriosityPhotoApiService]
    });
  });

  it('should ...', inject([CuriosityPhotoApiService], (service: CuriosityPhotoApiService) => {
    expect(service).toBeTruthy();
  }));
});
