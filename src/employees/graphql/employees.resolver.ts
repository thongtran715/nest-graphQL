import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from '../service/employees.service';
import { EmployeesGraphQLType } from '../types/employees.type';

@Resolver()
export class EmployeesResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(returns => [EmployeesGraphQLType], { name: 'employees' })
  async getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }
}
