import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css'

export default function UserNavbar(){
    const dispatch=useDispatch()
    const history=useHistory()
    const state=useSelector((state)=>state);

    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black",height:"80px"}}>
              <div className="container">
                <Link className="navbar-brand" to="/" style={{marginTop:"2px"}}><h2 style={{fontSize:"2.3rem",fontFamily:"sans-serif"}}><img src="./images/MTK.png" style={{width:"auto",height:"50px"}}/> MTK <em style={{fontSize:"1.4rem",color:"red",textTransform:"none"}}>Computers</em></h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto" >
                    <li className="nav-item">
                      <Link className="nav-link" to="/" style={{fontWeight:"bold"}}>Home</Link>
                    </li>
                    <li className="nav-item" ><Link className="nav-link" to="/products" style={{fontWeight:"bold"}}>Products</Link></li>
                    {state.loggedin && state.loggedin.Role==="Customer" ? (<>
                      {/* <li className="nav-item"><Link className="nav-link" to="/mybookings">My Bookings</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="/about"style={{fontWeight:"bold"}}>About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact"style={{fontWeight:"bold"}}>Contact Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" onClick={logout} to="/"style={{fontWeight:"bold"}}>Logout</Link></li>
                    <li className="nav-item"><Link style={{color:"red",fontWeight:"bold"}} className="nav-link" to="/">Hi {state.loggedin.Username }</Link></li>
                    </>
                    ) : (
                        <>
                      <li className="nav-item"><Link className="nav-link" to="/about"style={{fontWeight:"bold"}}>About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact"style={{fontWeight:"bold"}}>Contact Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/register"style={{fontWeight:"bold"}}>Register</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"style={{fontWeight:"bold"}}>Login</Link></li>                    
                    </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
        </>
    )
}