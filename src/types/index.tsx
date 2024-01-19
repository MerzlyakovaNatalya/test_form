export interface IProduct {
  id: string | number
  name: string  | number
  sum: string | number
  count: string | number
  price: string | number
}
export interface ISubGroup {
  id: string | number
  sum: number
  products: IProduct[]
}
export interface IGroup {
  id: string | number
  sum: number
  subGroups: ISubGroup[]
}
export interface IForm {
  sum: number
  groups: IGroup[]
}
