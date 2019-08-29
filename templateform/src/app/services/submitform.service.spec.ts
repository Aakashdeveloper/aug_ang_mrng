import { TestBed } from '@angular/core/testing';

import { SubmitformService } from './submitform.service';

describe('SubmitformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitformService = TestBed.get(SubmitformService);
    expect(service).toBeTruthy();
  });
});
