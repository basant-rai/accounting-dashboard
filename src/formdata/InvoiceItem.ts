import { IsNotEmpty } from "class-validator";

export class InvoiceItem {
  @IsNotEmpty({ message: 'Item name is required' })
  item_name: string

  @IsNotEmpty({ message: 'description is required' })
  description: string

  @IsNotEmpty({ message: 'quantity is required' })
  quantity: string

  @IsNotEmpty({ message: 'Price is required' })
  price: string

  @IsNotEmpty({ message: 'amount is required' })
  amount: string

  // @IsNotEmpty({ message: 'Item name is required' })
  // item_name: string



}