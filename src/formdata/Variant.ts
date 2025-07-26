import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Variant {
  @IsNotEmpty({ message: 'Name is required' })
  name: string

  @IsOptional({ message: 'Value is required' })
  value: string
}