import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { VendorService } from './vendor.service';

@ApiTags(`Vendor`)
@Controller('v1/vendors')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @ApiExcludeEndpoint()
  @Get('dock/credentials/request-claims/response')
  async getDockCredentialsRequestClaimsResponse() {
    return await this.vendorService.getDockCredentialsRequestClaimsResponse();
  }

  @Post('dock/credentials')
  async createDockCredentialsRequestClaims() {
    return await this.vendorService.createDockCredentialsRequestClaims({
      name: 'test',
    });
  }
}
