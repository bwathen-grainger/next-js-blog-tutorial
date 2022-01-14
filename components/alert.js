import styles from './alert.module.scss'
import cn from 'classnames'

// This uses the "classnames" package to mimic SvelteJS class directives
export default function Alert({ children, type }) {
  return (
    <span
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </span>
  )
}