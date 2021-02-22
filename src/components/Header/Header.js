import './Header.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
const Header = () => {
    return (
        <div className="header">
            <a href="https://www.linkedin.com/in/john-sherchan-b4a0a2147/" target="__blank"><LinkedInIcon  className="icon linkedin__icon"/> </a> 
            <a href="https://github.com/DzonHacker" target="__blank"><GitHubIcon className="icon github__icon"/></a> 
            <a href="https://www.instagram.com/cyber._.mancer/" target="__blank"><InstagramIcon className="icon instagram__icon" /></a> 
            <a href="https://www.facebook.com/john.sherchan.9/" target="__blank"><FacebookIcon className="icon facebook__icon"/></a> 
            
        </div>
    )
}

export default Header