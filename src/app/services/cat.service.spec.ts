import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;
  let getMock: jest.Mock;
  let postMock: jest.Mock;

  beforeEach(() => {
    getMock = jest.fn();
    postMock = jest.fn();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: getMock,
            post: postMock
          }
        }
      ]  
    });
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
