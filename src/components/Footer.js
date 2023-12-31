import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks classList='footer-links' classItem='footer-link' />
      <SocialLinks classList='footer-icons' classItem='footer-icon' />
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
