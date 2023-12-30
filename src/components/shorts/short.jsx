import pfp from '../../assets/images/pfp.jpeg';
import { Link } from 'react-router-dom';

const Short=()=>{
    return(
        <>
        <Link to="/short">
            <div className="shorts-slide">
                <div className="shorts-image">
                    <img src={pfp} alt="" />
                </div>
                <div className="shorts-detail">
                    <p className="shorts-title">Learning React by Creating Youtube Replica</p>
                    <div className="shorts-views">100M views</div>
                </div>
            </div>
        </Link>
        </>
    )
}
export default Short;