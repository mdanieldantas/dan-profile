import Title from "./Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import LinkButton from "../LinkButton"
import { useState } from "react"



export default function Profile(props) {

  // [valor, funçãoModificadora] sempre usa o prefixo set
  const [followText, setFollowText] = useState("Follow")

  function handleClick(ev) {
    alert("Você agora está seguindo!")
    setFollowText("Following")
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        {/* <button
          className={styles.followButton}
          onClick={handleClick}
        >
          {followText}
        </button> */}
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      {/* <ProfileSection>{props.phone}</ProfileSection> */}
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.portifolioUrl}>Protifólio</LinkButton>
        <LinkButton href={props.curriculoUrl}>Currículo</LinkButton>
      </ProfileSection>
    </div>
  )
}
