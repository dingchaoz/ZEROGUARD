import { Module } from '@nestjs/common';
import { CartesiController } from './cartesi.controller';
import { CartesiService } from './cartesi.service';

@Module({
  imports: [],
  controllers: [CartesiController],
  providers: [CartesiService],
})
export class CartesiModule {}
