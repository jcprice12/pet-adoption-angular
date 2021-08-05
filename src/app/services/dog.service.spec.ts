import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DogService } from './dog.service';


describe('DogService', () => {
  let service: DogService;
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
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
