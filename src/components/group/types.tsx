import { ReactNode } from 'react'

export interface IGroupLayout {
  title: string
  text: string
  sum: number
  textButton: string
  children: ReactNode
  onClickButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string | number,
    idSubGroup?: string | number
  ) => void
  idGroup: string | number
  idSubGroup?: string | number
}
