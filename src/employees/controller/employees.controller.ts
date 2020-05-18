import { EmployeeService } from './../service/employees.service';
import { Cat } from './../../cats/interfaces/cat.interface';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly emloyeeService: EmployeeService) {}

  @Get()
  getEmployees() {
    return this.emloyeeService.getAllEmployees();
  }
}
