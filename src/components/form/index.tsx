import { FC } from 'react'
import { IFormLayout } from './types'
import style from './styles.module.scss'

const FormLayout: FC<IFormLayout> = (props) => {
  return (
    <>
      <form className={style.form_layout} onSubmit={(event) => props.onSubmit(event)}>
        <h2>Форма</h2>
        {props.children}
        <p className={style.form_layout_text}>Итого: {props.total}</p>
        <input type="submit" value="Отправить"/>
      </form>
    </>
  )
}

export default FormLayout