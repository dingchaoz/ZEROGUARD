import { Module } from '@nestjs/common';
import { ProofController } from './proof.controller';
import { ProofService } from './proof.service';
import { CartesiService } from '../cartesi/cartesi.service';

@Module({
  imports: [],
  controllers: [ProofController],
  providers: [ProofService, CartesiService],
})
export class ProofModule {}
