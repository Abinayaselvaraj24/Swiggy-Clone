import { Link } from "react-router-dom";
import './component.css'

const Header=()=>{
    return(
      <>
      <div className="header">
         <h1 className="logo"><strong>🫕</strong></h1> 
       
        <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/contact">Contact
        </Link>
        </span>
        </nav>
      </div>
      </>
    )
  }

export default Header;