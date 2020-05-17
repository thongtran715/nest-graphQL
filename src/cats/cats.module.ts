import { CatController } from './controller/cat.controller';
import { CatsResolver } from './graphql/cats.resolver';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './mongoose/cats.schema';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatController],
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
