import { FC } from 'react'
import { ISideLayout } from './types'
import style from './styles.module.scss'

const SideLayout: FC<ISideLayout> = ({ children, side }) => {
  
  return (
    <div className={style.wrap_layout} style={{justifyContent: side}}>
      {children}
    </div>
  )
}

export default SideLayout
