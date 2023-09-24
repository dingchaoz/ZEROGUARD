import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProofService } from './proof.service';
import { Response } from 'express';
import * as fs from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags(`Proof`)
@Controller('v1/proofs')
export class ProofController {
  constructor(private readonly proofService: ProofService) {}

  @ApiOperation({ summary: 'Get user KYC proof' })
  @Get('kyc/users/:userId')
  async getProof(@Res() res: Response, @Param('userId') userId: number) {
    const { filePath, fileName } = await this.proofService.generateKycProof(
      userId,
    );

    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', 'application/octet-stream');

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }

  @ApiOperation({ summary: 'Verify KYC proof' })
  @Post('kyc/verifications')
  @UseInterceptors(FileInterceptor('file'))
  async verifyKycProof(@UploadedFile() file: Express.Multer.File) {
    return await this.proofService.verifyKycProof(file);
  }
}
