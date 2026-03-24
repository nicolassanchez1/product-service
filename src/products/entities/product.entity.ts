import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @ApiProperty({
    example: 'b8b1e9c-c5a7-48b0-8b9d-a7241acc0518',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: "'b8b1e9c-c5a7-48b0-8b9d-a7241acc0518'", description: 'User ID' })
  @Column()
  userId: string;

  @ApiProperty({
    example: 'Ps5',
    description: 'Product name',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'PlayStation 5 slim edición limitada.',
    description: 'Product description',
    default: null,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    example: 400,
    description: 'Product price',
    default: 0,
  })
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0,
  })
  @Column('int', { default: 0 })
  stock: number;

  @ApiProperty({
    example: 'base64',
    description: 'Product image',
    default: null,
  })
  @Column({ type: 'text', nullable: true })
  image: string;
}
