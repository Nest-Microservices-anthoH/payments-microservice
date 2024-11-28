import { Type } from 'class-transformer';
import {
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class PaymentSessionDto {
  @IsString()
  orderId: string;
  @IsString()
  currency: string;
  @ValidateNested({ each: true })
  @Type(() => PaymentSessionItemDto)
  items: PaymentSessionItemDto[];
}

export class PaymentSessionItemDto {
  @IsString()
  name: string;
  @IsNumber()
  @IsPositive()
  price: number;
  @IsNumber()
  @IsPositive()
  quantity: number;
}
