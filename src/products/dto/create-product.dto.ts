import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, IsNotEmpty, Min, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Ps5',
    description: 'Product name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'PlayStation 5 slim edición limitada.',
    description: 'Product description',
    default: null,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 400,
    description: 'Product price',
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0,
  })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({
    example: 'base64',
    description: 'Product image',
    default: null,
  })
  @IsString()
  @IsOptional()
  image?: string;
}
