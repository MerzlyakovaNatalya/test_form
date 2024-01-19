import { FC } from 'react'
import { IButton } from './types'
import style from './styles.module.scss'

const Button: FC<IButton> = ({ onClick, label }) => {
  return (
    <div className={style.button}>
      <button onClick={(event) => onClick(event)} className={style.button_label}>{label}</button>
    </div>
  )
}

export default Button
