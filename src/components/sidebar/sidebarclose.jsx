import { Link } from "react-router-dom";
function SidebarClose({home, shorts, subs, you ,homeclose, subopen, youclose}) {

    
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
                  <div className="sb-close-unit">
                      <img src={you} alt="" />
                      <span>You</span>
                  </div>
              </div>);
  }
  export default SidebarClose;