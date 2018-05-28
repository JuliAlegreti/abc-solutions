import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './controllers/category.controller';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, ProductController],
  providers: [AppService]
})
export class AppModule {}
