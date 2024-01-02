import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SidebarClose({home, shorts, subs, you ,homeclose, subopen, youclose}) {
    const {currentUser} = useSelector(state=>state.user)

    
    return (<div className={`sidebar-close`}>
                  <div className="sb-close-unit">
                      <img src={home} alt="" />
                      <span>Home</span>
                  </div>
                  <div className="sb-close-unit">
                      <img src={shorts} alt="" />
                      <span>Shorts</span>
                  </div>
                  <Link to="/subscriptions">
                      <div className="sb-close-unit">
                          <img src={subs} alt="" />
                          <span>Subscriptions</span>
                      </div>
                  </Link>
                    <Link to={currentUser?`/channel/${currentUser._id}`:null} className="sb-close-unit">
                        <img src={you} alt="" />
                        <span>You</span>
                    </Link>
                  
              </div>);
  }
  export default SidebarClose;