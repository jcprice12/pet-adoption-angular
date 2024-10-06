import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FishService } from './fish.service';

describe('FishService', () => {
  let service: FishService;
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
            post: postMock,
          },
        },
      ],
    });
    service = TestBed.inject(FishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
