export interface IProductLayout {
  id: string | number
  name: {
    valueName: string | number,
    labelName: string
  }
  price: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void
  label?: string
}
