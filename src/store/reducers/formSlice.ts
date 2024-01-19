import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFormState {
  form: {
    sum: number
    groups: IGroup[]
  }
  isLoading: boolean
  error: string
}

interface IProduct {
  id: string | number
  name: string
  sum: string | number
  count: string | number
  price: string | number
}

interface ISubGroup {
  id: string | number
  sum: number
  products: IProduct[]
}

interface IGroup {
  id: string | number
  sum: number
  subGroups: ISubGroup[]
}

const initialState: IFormState = {
  form: {
    sum: 0,
    groups: [
      {
        id: 1,
        sum: 0,
        subGroups: [
          {
            id: 2,
            sum: 0,
            products: [
              {
                id: 3,
                name: 'Продукт',
                sum: 0,
                count: 0,
                price: 0,
              },
              {
                id: 4,
                name: 'Продукт',
                sum: 0,
                count: 0,
                price: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  isLoading: false,
  error: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addGroup(state, action: PayloadAction<IGroup>) {
        state.form.groups.push(action.payload);
      }
  },
})
export default formSlice.reducer
