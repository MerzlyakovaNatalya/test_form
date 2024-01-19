import { ReactNode } from 'react'

export interface IFormLayout {
    onSubmit: () => void
    children: ReactNode
  }