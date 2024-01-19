import { FC } from 'react'
import { IProductLayout } from './types'
import style from './styles.module.scss'

const ProductLayout: FC<IProductLayout> = (props) => {
  const label = props.label || ''
  return (
    <div className={style.product_layout}>
      <label className={style.product_layout_label}>{props.name.labelName}
      <input
        className={style.product_layout_input}
        value={props.name.valueName}
        type="text"
        onChange={(event) => props.onChange(event, label)}
      />
      </label>
    </div>
  )
}

export default ProductLayout
