import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { CartesiService } from './cartesi.service';

@ApiTags(`Cartesi`)
@Controller('v1/cartesis')
export class CartesiController {
  constructor(private readonly cartesiService: CartesiService) {}

  @ApiExcludeEndpoint()
  @Get('none')
  async getCartesiNone() {
    return await this.cartesiService.getCartesi('NONE');
  }

  @ApiExcludeEndpoint()
  @Get('passed')
  async getCartesiPassed() {
    return await this.cartesiService.getCartesi('PASSED');
  }
}
