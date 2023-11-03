import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ classList, classItem }) => {
  return (
    <ul className={classList} id={classList}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} classItem={classItem} />
      })}
    </ul>
  )
}
export default PageLinks
