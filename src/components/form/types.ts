import { ReactNode } from 'react'

export interface IFormLayout {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    children: ReactNode
    total: number
  }