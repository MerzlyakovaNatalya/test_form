import { FC } from 'react'
import { IFormLayout } from './types'
import style from './styles.module.scss'

const FormLayout: FC<IFormLayout> = (props) => {
  return (
    <>
      <form className={style.form_layout} onSubmit={() => {}}>
        <h2>Форма</h2>
        {props.children}
        <p>Итого</p>
        <input type="submit" value="Отправить"/>
      </form>
    </>
  )
}

export default FormLayout