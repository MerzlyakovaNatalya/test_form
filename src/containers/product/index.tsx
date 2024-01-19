import { FC, useCallback, useState, useLayoutEffect } from 'react'
import { IProduct } from '../../types'
import ProductLayout from '../../components/product_layout'
import debounce from 'debounce'
import { productSlice } from '../../store/reducers/productSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import SideLayout from '../../chared/side-layout'
import Button from '../../components/button'

const Product: FC<IProduct> = (props) => {
  const [valueName, setValueName] = useState(props.name)
  const [valueCount, setValueCount] = useState(props.count)
  const [valuePrice, setValuePrice] = useState(props.price)
  const dispatch = useAppDispatch()

  const { changeValueProduct, removeProduct } = productSlice.actions

  const labelsProduct = ['name', 'price', 'count', 'sum']

  const onChangeDebounce = useCallback(
    debounce((event, label) => {
      dispatch(
        changeValueProduct({
          id: props.id,
          name: label,
          value: event,
        })
      )
      dispatch(
        changeValueProduct({
          id: props.id,
          name: 'sum',
          value: '',
        })
      )
    }, 600),
    [props.name]
  )

  const changeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
      switch (label) {
        case 'name':
          setValueName(event.target.value)
          onChangeDebounce(event.target.value, label)
          break
        case 'count':
          setValueCount(event.target.value)
          onChangeDebounce(event.target.value, label)
          break
        case 'price':
          setValuePrice(event.target.value)
          onChangeDebounce(event.target.value, label)
          break
      }
    },
    []
  )

  const getLabel = (item: string) => {
    switch (item) {
      case 'name':
        return {
          valueName: valueName,
          labelName: 'Название',
        }

      case 'count':
        return {
          valueName: valueCount,
          labelName: 'Кол-во',
        }

      case 'price':
        return {
          valueName: valuePrice,
          labelName: 'Цена',
        }

      case 'sum':
        return {
          valueName: props.sum,
          labelName: 'Сумма',
        }

      default:
        return {
          valueName: '',
          labelName: '',
        }
    }
  }

  const onRemoveProduct = (id: string | number) => {
    dispatch(removeProduct(id))
  }

  useLayoutEffect(() => {
    setValueName(props.name)
    setValueCount(props.count)
    setValuePrice(props.price)
  }, [props.name])

  return (
    <>
      <SideLayout side="space-between">
        {labelsProduct.map((item, index) => (
          <ProductLayout
            key={index}
            id={props.id}
            name={getLabel(item)}
            price={props.price}
            onChange={changeValue}
            label={item}
          />
        ))}
        <Button onClick={() => onRemoveProduct(props.id)} label="Удалить" />
      </SideLayout>
    </>
  )
}

export default Product
