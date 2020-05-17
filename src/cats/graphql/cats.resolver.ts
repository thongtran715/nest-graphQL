import { CatType } from '../dto/create-cat.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from '../cats.service';
import { CatInput } from '../inputs/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  @Query(() => CatType)
  async cat(@Args('id') id: string) {
    return this.catsService.findCatByID(id);
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
