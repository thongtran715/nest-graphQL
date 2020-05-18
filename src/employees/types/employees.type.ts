import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class EmployeesGraphQLType {
  @Field()
  id?: string;

  @Field()
  employee_salary: string;

  @Field()
  employee_name: string;

  @Field(() => Int)
  employee_age: number;

  @Field()
  profile_image?: string;
}
export interface EmployeesType {
  readonly id?: string;
  readonly employee_salary: string;
  readonly employee_name: string;
  readonly employee_age: number;
  readonly profile_image?: string;
}
