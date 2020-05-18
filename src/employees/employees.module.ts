import { EmployeesResolver } from './graphql/employees.resolver';
import { EmployeeController } from './controller/employees.controller';
import { Module, HttpModule } from '@nestjs/common';
import { EmployeeService } from './service/employees.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  providers: [EmployeeService, EmployeesResolver],
  controllers: [EmployeeController],
})
export class EmployeesModule {}
