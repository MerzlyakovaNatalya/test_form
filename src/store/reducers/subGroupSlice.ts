import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISubGroup, IProduct } from '../../types'

interface SubGroupState {
  subGroups: ISubGroup[]
  isLoading: boolean
  error: string
}

interface SubGroupAction {
  id: string | number
  products: IProduct[]
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

const initialState: SubGroupState = {
  subGroups: [
    {
      id: generateUniqueId(),
      sum: 0,
      products: [],
    },
    {
      id: generateUniqueId(),
      sum: 0,
      products: [],
    },
  ],
  isLoading: false,
  error: '',
}

export const subGroupSlice = createSlice({
  name: 'subGroups',
  initialState,
  reducers: {
    addsubGroups(state) {
      state.subGroups.push({
        id: Date.now(),
        sum: 0,
        products: [],
      })
    },
    removeSubGroups(state, action: PayloadAction<string | number>) {
      state.subGroups = state.subGroups.filter(
        (subGroup) => subGroup.id !== action.payload
      )
    },
    changeProducts(state, action: PayloadAction<SubGroupAction>) {
      const toggledProducts = state.subGroups.find(
        (subGroup) => subGroup.id === action.payload.id
      )
      if (toggledProducts) toggledProducts.products = action.payload.products
    },
  },
})

export default subGroupSlice.reducer
