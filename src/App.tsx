import { useState } from 'react'
import Product from './containers/product'
import Button from './components/button'
import GroupLayout from './components/group'
import FormLayout from './components/form'
import './styles.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { productSlice } from './store/reducers/productSlice'

const App = () => {
  const { products } = useAppSelector((state) => state.productReducer)
  const { subGroups } = useAppSelector((state) => state.subGroupsReducer)
  const { addProduct } = productSlice.actions
  const dispatch = useAppDispatch()

  const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addProduct())
  }
  return (
    <>
      <FormLayout onSubmit={() => {}}>
        <GroupLayout
          title="Группа"
          text="Сумма группы"
          sum={2}
          textButton="Удалить группу"
        >
          {subGroups.map((subGroup) => (
            <GroupLayout
              key={subGroup.id}
              title="Подгруппа"
              text="Сумма подгруппы"
              sum={2}
              textButton="Удалить подгруппу"
            >
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  sum={product.sum}
                  count={product.count}
                  price={product.price}
                />
              ))}
              <Button onClick={handleAddProduct} label="Добавить" />
            </GroupLayout>
          ))}
          {/* <GroupLayout
            title="Подгруппа"
            text="Сумма подгруппы"
            sum={2}
            textButton="Удалить подгруппу"
          >
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                sum={product.sum}
                count={product.count}
                price={product.price}
              />
            ))}
            <Button onClick={handleAddProduct} label="Добавить" />
          </GroupLayout> */}
          <Button onClick={() => {}} label="Добавить подгруппу" />
        </GroupLayout>
        <Button onClick={() => {}} label="Добавить группу" />
      </FormLayout>
    </>
  )
}

export default App
