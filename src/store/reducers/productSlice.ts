import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types'

interface ProductState {
  products: IProduct[]
  isLoading: boolean
  error: string
}

interface ProductAction {
  id: string | number
  name: string | number
  value: string | number
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: 'Продукт1',
      sum: 6,
      count: 3,
      price: 2,
    },
    {
      id: 2,
      name: 'Продукт2',
      sum: 4,
      count: 2,
      price: 2,
    },
  ],
  isLoading: false,
  error: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state) {
      state.products.push({
        id: Date.now(),
        name: 'Продукт',
        sum: 0,
        count: 0,
        price: 0,
      })
    },
    changeValueProduct(state, action: PayloadAction<ProductAction>) {
      const toggledTodo = state.products.find(
        (item) => item.id === action.payload.id
      )
      switch (action.payload.name) {
        case 'name':
          if (toggledTodo) {
            toggledTodo[action.payload.name] = action.payload.value
          }
          break

        case 'sum':
          if (toggledTodo) {
            toggledTodo.sum = Number(toggledTodo.count) * Number(toggledTodo.price)
          }
          break

        case 'count':
          if (toggledTodo) {
            toggledTodo.count = Number(action.payload.value)
          }
          break

        case 'price':
          if (toggledTodo) {
            toggledTodo.price = Number(action.payload.value)
          }
          break

        default:
          state
      }
    },
    removeProduct(state, action: PayloadAction<string | number>) {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  },
})

export default productSlice.reducer
