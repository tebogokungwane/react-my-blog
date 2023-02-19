import { NavLink } from "react-router-dom";
import logo from '../Images/logo.jpeg';
import '../Css/ListStyle.css';



const List=()=>{
    return(
        <>
<header>
    <div className="container container-flex">
        <div className="logoContainer">
            <img src={logo} alt ="logo" className="logo"/>
            </div>
            <nav>
                <div className="list"></div>
                <NavLink exact="true" to="/" className="listItem"
               >Home</NavLink>

                <NavLink to="/contact" className="listItem"
               >Contact</NavLink>

                
            </nav>
            

            </div>            
                </header>
    
        </>
    )
}

export default List