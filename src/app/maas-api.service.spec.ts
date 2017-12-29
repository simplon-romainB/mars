/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaasApiService } from './maas-api.service';

describe('MaasApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaasApiService]
    });
  });

  it('should ...', inject([MaasApiService], (service: MaasApiService) => {
    expect(service).toBeTruthy();
  }));
});
