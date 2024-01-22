import { useState } from 'react'
import Product from './containers/product'
import Button from './components/button'
import GroupLayout from './components/group'
import FormLayout from './components/form'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { formSlice } from './store/reducers/formSlice'
import { generateGroup, generateSubGroup, generateProduct } from './utils'
import './styles.css'

const App = () => {
  const { 
    addGroup, 
    addsubGroups, 
    addProduct, 
    removeGroup, 
    removeSubGroup,
    recalculationAmount} = formSlice.actions
  const dispatch = useAppDispatch()

  const { groups } = useAppSelector((state) => state.formReducer.form)
  const { sum } = useAppSelector((state) => state.formReducer.form)
  const { form } = useAppSelector((state) => state.formReducer)

  const handleAddProduct = (
    event: React.MouseEvent<HTMLButtonElement>,
    idGroup: string | number,
    idSubGroup: string | number
  ) => {
    event.preventDefault()
    dispatch(
      addProduct({
        idGroup: idGroup,
        idSubGroup: idSubGroup,
        products: generateProduct(),
      })
    )
  }

  const handleAddGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addGroup(generateGroup()))
  }

  const handleSubGroup = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string | number
  ) => {
    event.preventDefault()
    dispatch(
      addsubGroups({
        idGroup: id,
        subGroup: generateSubGroup(),
      })
    )
  }

  const handleRemoveGroup = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string | number
  ) => {
    event.preventDefault()
    dispatch(removeGroup(id))
    dispatch(recalculationAmount())
  }

  const handleRemoveSubGroup = (
    event: React.MouseEvent<HTMLButtonElement>,
    idGroup: string | number,
    idSubGroup: string | number | undefined
  ) => {
    event.preventDefault()
    dispatch(removeSubGroup({idGroup, idSubGroup}))
    dispatch(recalculationAmount())
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(JSON.stringify(form, null, 2))
  }

  return (
    <>
      <FormLayout onSubmit={handleSubmit} total={sum}>
        {groups.map((group) => (
          <GroupLayout
            key={group.id}
            title="Группа"
            text="Сумма группы"
            sum={group.sum}
            textButton="Удалить группу"
            idGroup={group.id}
            onClickButton={handleRemoveGroup}
          >
            {group.subGroups.map((subGroup) => (
              <GroupLayout
                key={subGroup.id}
                title="Подгруппа"
                text="Сумма подгруппы"
                sum={subGroup.sum}
                textButton="Удалить подгруппу"
                idGroup={group.id}
                onClickButton={handleRemoveSubGroup}
                idSubGroup={subGroup.id}
              >
                {subGroup.products.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    sum={product.sum}
                    count={product.count}
                    price={product.price}
                    idGroup={group.id}
                    idSubGroup={subGroup.id}
                  />
                ))}
                <Button
                  onClick={(event) =>
                    handleAddProduct(event, group.id, subGroup.id)
                  }
                  label="Добавить"
                />
              </GroupLayout>
            ))}
            <Button
              onClick={(event) => handleSubGroup(event, group.id)}
              label="Добавить подгруппу"
            />
          </GroupLayout>
        ))}
        <Button onClick={handleAddGroup} label="Добавить группу" />
      </FormLayout>
    </>
  )
}

export default App
