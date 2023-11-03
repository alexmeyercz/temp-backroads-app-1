import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = ({ classList, classItem }) => {
  return (
    <ul className={classList}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} classItem={classItem} />
      })}
    </ul>
  )
}
export default SocialLinks
