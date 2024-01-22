import { FC } from 'react'
import { IGroupLayout } from './types'
import Button from '../button'
import style from './styles.module.scss'

const GroupLayout: FC<IGroupLayout> = (props) => {
  const border =
    props.title === 'Группа' ? { border: 0 } : { border: '1px solid' }

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.idSubGroup) {
      props.onClickButton(event, props.idGroup, props.idSubGroup)
    } else {
      props.onClickButton(event, props.idGroup)
    }
  }
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
        <Button
          onClick={(event) => {
            handleClickButton(event)
          }}
          label={props.textButton}
        />
        {props.children}
      </div>
    </>
  )
}

export default GroupLayout
