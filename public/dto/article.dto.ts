import { AddressDto } from "./address.dto"

export type ArticleDto = {
    id:string,
    name :string,
    description : string,
    phone : string,
    address:AddressDto
    price : string
    img : string[],
    cateorygId:string,
    // isHidden : boolean,
}