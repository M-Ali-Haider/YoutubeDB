import '../assets/styles/footer.css';
import home from '../assets/images/home.svg'
import shorts from '../assets/images/shorts.svg'
import subs from '../assets/images/subs.svg'
import you from '../assets/images/you.svg'
import browse from '../assets/images/browse.svg'
const Footer=()=>{
    return(
        <>
        <footer>
            <div className="footer-unit">
                <img src={home} alt="" />
                <span>Home</span>
            </div>
            <div className="footer-unit">
                <img src={shorts} alt="" />
                <span>Shorts</span>
            </div>
            <div className="footer-unit ">
                <img className='browse-footer' src={browse} alt="" />
            </div>
            <div className="footer-unit">
                <img src={subs} alt="" />
                <span>Subscriptions</span>
            </div>
            <div className="footer-unit">
                <img src={you} alt="" />
                <span>Library</span>
            </div>
        </footer>
        </>
    )
}
export default Footer;