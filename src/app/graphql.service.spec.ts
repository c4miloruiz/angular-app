import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GraphqlService } from './graphql.service';

describe('GraphqlService', () => {
  let service: GraphqlService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GraphqlService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be sum', () => {
    // Arrange
    const a = 20;
    const b = 30;
    // Act
    const rta = service.sum(a,b);
    // Assert
    expect(rta).toBe(50);
  });

  it('should be return a tasks list ', () => {
    // Arrange
    const testData = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      }
    ];

    // Act
    service.getTodos()
    .subscribe(rta => {
      // Assert
      expect(rta.length).toBe(2);
      expect(rta[0].title).toBe('delectus aut autem');
      expect(rta[0].date).toBe('2021-09-12');

      expect(rta[1].title).toBe('quis ut nam facilis et officia qui');
      expect(rta[1].date).toBe('2021-09-12');
    });
    

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos/');

    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();

    
  });
});
