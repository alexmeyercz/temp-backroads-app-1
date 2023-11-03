const SocialLink = ({ href, icon, classItem }) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={classItem}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
