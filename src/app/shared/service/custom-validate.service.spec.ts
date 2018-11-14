import { TestBed, inject } from '@angular/core/testing';

import { CustomValidateService } from './custom-validate.service';

describe('CustomValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomValidateService]
    });
  });

  it('should be created', inject([CustomValidateService], (service: CustomValidateService) => {
    expect(service).toBeTruthy();
  }));
});
