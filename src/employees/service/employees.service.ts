import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { EmployeesType } from '../types/employees.type';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(private readonly httpService: HttpService) {}

  public getAllEmployees(): Observable<EmployeesType> {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.httpService.get(url).pipe(map(response => response.data.data));
  }
}
