import { FC } from 'react'
import { IGroupLayout } from './types'
import Button from '../button'
import style from './styles.module.scss'

const GroupLayout: FC<IGroupLayout> = (props) => {

  const border = props.title === 'Группа' ? {border: 0} : {border: '1px solid'}
  return (
    <>
      <div className={style.group_layout} style={border}>
        <h2 className={style.group_layout_title}>{props.title}</h2>
        <label className={style.group_layout_label}>
          {props.text}
          <input
            className={style.group_layout_input}
            value={props.sum}
            type="text"
            readOnly
          />
        </label>
        <Button onClick={() => {}} label={props.textButton} />
        {props.children}
      </div>
    </>
  )
}

export default GroupLayout
