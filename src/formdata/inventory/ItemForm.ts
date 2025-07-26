import { IsNotEmpty } from "class-validator";

export class ItemFormData {
  @IsNotEmpty({ message: 'name is required' })
  name: string

  @IsNotEmpty({ message: 'description is required' })
  description: string

  @IsNotEmpty({ message: 'quantity is required' })
  sale_price: string

  @IsNotEmpty({ message: 'Price is required' })
  purchase_price: string

}