import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGroup, ISubGroup, IProduct } from '../../types'
import groupsJson from '../../data/groups.json'
import { recalculation } from '../../utils'

export interface IFormState {
  form: {
    sum: number
    groups: IGroup[]
  }
  isLoading: boolean
  error: string
}

interface ISubGroupAction {
  idGroup: string | number
  subGroup: ISubGroup
}

interface IProductAction {
  idGroup: string | number
  idSubGroup: string | number
  products: IProduct
}

interface IRemoteProductAction {
  idGroup: string | number
  idSubGroup: string | number
  id: string | number
}

interface IChangeProductAction extends IRemoteProductAction {
  name: string | number
  value: string | number
}

const initialState: IFormState = {
  form: {
    sum: 0,
    groups: [groupsJson],
  },
  isLoading: false,
  error: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addGroup(state, action: PayloadAction<IGroup>) {
      state.form.groups.push(action.payload)
    },
    addsubGroups(state, action: PayloadAction<ISubGroupAction>) {
      const groupIndex = state.form.groups.findIndex(
        (group) => group.id === action.payload.idGroup
      )

      if (groupIndex !== -1) {
        let group = state.form.groups[groupIndex]
        group.subGroups.push(action.payload.subGroup)
      }
    },
    addProduct(state, action: PayloadAction<IProductAction>) {
      const groupIndex = state.form.groups.findIndex(
        (group) => group.id === action.payload.idGroup
      )

      let subGroupIndex: number = -1

      if (groupIndex !== -1) {
        let group = state.form.groups[groupIndex]
        subGroupIndex = group.subGroups.findIndex(
          (subGroup) => subGroup.id === action.payload.idSubGroup
        )
      }

      if (subGroupIndex !== -1) {
        state.form.groups[groupIndex].subGroups[subGroupIndex].products.push(
          action.payload.products
        )
      }
    },
    removeGroup(state, action: PayloadAction<string | number>) {
      state.form.groups = state.form.groups.filter(
        (group) => group.id !== action.payload
      )
    },
    removeSubGroup(
      state,
      action: PayloadAction<{
        idGroup: string | number
        idSubGroup: string | number | undefined
      }>
    ) {
      const groupIndex = state.form.groups.findIndex(
        (group) => group.id === action.payload.idGroup
      )

      if (groupIndex !== -1) {
        let group = state.form.groups[groupIndex]
        group.subGroups = group.subGroups.filter(
          (subGroup) => subGroup.id !== action.payload.idSubGroup
        )
      }
    },
    removeProduct(state, action: PayloadAction<IRemoteProductAction>) {
      const groupIndex = state.form.groups.findIndex(
        (group) => group.id === action.payload.idGroup
      )
      let subGroupIndex: number = -1

      if (groupIndex !== -1) {
        let group = state.form.groups[groupIndex]
        subGroupIndex = group.subGroups.findIndex(
          (subGroup) => subGroup.id === action.payload.idSubGroup
        )
      }

      if (subGroupIndex !== -1) {
        let product = state.form.groups[groupIndex].subGroups[subGroupIndex]
        product.products = product.products.filter(
          (product) => product.id !== action.payload.id
        )
      }
    },
    changeValueProduct(state, action: PayloadAction<IChangeProductAction>) {
      const groupIndex = state.form.groups.findIndex(
        (group) => group.id === action.payload.idGroup
      )
      let subGroupIndex: number = -1

      if (groupIndex !== -1) {
        let group = state.form.groups[groupIndex]
        subGroupIndex = group.subGroups.findIndex(
          (subGroup) => subGroup.id === action.payload.idSubGroup
        )
      }

      if (subGroupIndex !== -1) {
        let products = state.form.groups[groupIndex].subGroups[subGroupIndex]
        let productIndex = products.products.findIndex(
          (product) => product.id === action.payload.id
        )
        let product =
          state.form.groups[groupIndex].subGroups[subGroupIndex].products[
            productIndex
          ]

        switch (action.payload.name) {
          case 'name':
            product[action.payload.name] = action.payload.value
            break

          case 'sum':
            const totalAmount = Number(product.count) * Number(product.price)
            product.sum = totalAmount
            break

          case 'count':
            product.count = Number(action.payload.value)
            break

          case 'price':
            product.price = Number(action.payload.value)
            break

          default:
            state
        }
      }
    },
    recalculationAmount(state) {
      let productOfOneGroup = 0
      let subgroupsOfOneGroup = 0
      let totalGroupAmount = 0

      state.form.groups.forEach((group, indexGroup) => {
        group.subGroups.forEach((subGroups, indexSubGroup) => {
          subGroups.products.forEach((product) => {
            productOfOneGroup += Number(product.sum) // подсчитали продукты
          })
          subgroupsOfOneGroup += productOfOneGroup // записали общую сумму продутков в подгруппу
          state.form.groups[indexGroup].subGroups[indexSubGroup].sum = productOfOneGroup
          productOfOneGroup = 0 // очистили переменную с суммой продуктов
        })
        totalGroupAmount += subgroupsOfOneGroup // записали общую сумму подгрупп
        state.form.groups[indexGroup].sum = subgroupsOfOneGroup
        subgroupsOfOneGroup = 0 // очистили переменную с суммой подгрупп
      })

      state.form.sum = totalGroupAmount
    },
  },
})
export default formSlice.reducer
