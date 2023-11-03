const PageLink = ({ href, text, classItem }) => {
  return (
    <li>
      <a href={href} className={classItem}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
