import { IFormState } from "../store/reducers/formSlice"
import { IGroup } from "../types"

/**
 * Создание уникального id
 * @returns
 */
export function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

/**
 * Создание пустой группы
 * @returns {Object}
 */
export function generateGroup() {
  return {
    id: generateUniqueId(),
    sum: 0,
    subGroups: [
      {
        id: generateUniqueId(),
        sum: 0,
        products: [
          {
            id: generateUniqueId(),
            name: 'Продукт',
            sum: 0,
            count: 0,
            price: 0,
          },
        ],
      },
    ],
  }
}

/**
 * Создание пустой группы
 * @returns {Object}
 */
export function generateSubGroup() {
    return {
        id: generateUniqueId(),
        sum: 0,
        products: [
          {
            id: generateUniqueId(),
            name: 'Продукт',
            sum: 0,
            count: 0,
            price: 0,
          },
        ]
      }
  }

  /**
   * Создание нового продукта
   * @returns 
   */
  export function generateProduct() {
    return {
            id: generateUniqueId(),
            name: 'Продукт',
            sum: 0,
            count: 0,
            price: 0,
          }
  }
 
//   export function recalculationAmount(state: IFormState) {
//     const newState: IFormState = { ...state };

//     newState.form.sum = 0;
  
//     state.form.groups.forEach((group) => {
//       newState.form.sum += group.sum;
  
//       group.subGroups.forEach((subGroup) => {
//         newState.form.sum += subGroup.sum;
  
//         if (subGroup.products !== null) {
//           subGroup.products.forEach((product) => {
//             newState.form.sum += Number(product.sum);
//           });
//         }
//       });
//     });
  
//     return newState;
//   }

export function recalculation(array: IGroup[]) {
const sum = 0
// array.forEach((item) => {console.log(item)})
console.log('массив в ф-и Foreach', array)
}

