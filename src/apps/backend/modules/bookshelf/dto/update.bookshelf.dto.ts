import { IsEnum, IsOptional } from 'class-validator';
import { ReadStatus } from '../read.status.enum';

export class UpdateBookshelfItemDto {
  @IsOptional()
  @IsEnum(ReadStatus, { message: 'Status inválido.' })
  status: ReadStatus;
}