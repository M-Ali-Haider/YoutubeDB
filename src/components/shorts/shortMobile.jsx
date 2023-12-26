import pfp from '../../assets/images/pfp.jpeg';
const ShortMobile=()=>{
    return(
        <>
        <div className="shorts-mobile-div">
            <div className="shorts-slide">
                <div className="shorts-image-mobile">
                    <img src={pfp} alt="" />
                    <div className="shorts-detail-mobile">
                        <p className="shorts-title">Learning React by Creating Youtube Replica</p>
                    </div>
                    <div className="shadow-on-image"></div>
                </div>
                
            </div>
        </div>
        
        </>
    )
}
export default ShortMobile;