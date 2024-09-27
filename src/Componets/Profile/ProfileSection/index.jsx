import styles from "./styles.module.css"

export default function ProfileSection(props) {
  return (
    <div
      {...props}
      // duas classes independentes
      className={`${styles.wrapper} ${props.className}`}
    >
      {props.children}
    </div>
  )
}