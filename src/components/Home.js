import { NavLink,  } from "react-router-dom";
import homeimg from '../Images/homeImage.jpg';
import '../Css/HomeAbout.css';





const Home=()=>{
    return(
        <>

<div className="mainSection">

    <div className="contentBox">
        <h1>Arsernal foot ball club</h1>
        <p>
        Arsenal Football Club, commonly referred to as Arsenal, is a professional football club based in Islington, London, England. 
        Arsenal plays in the Premier League, the top flight of English football. The club has won 13 league titles (including one unbeaten title),
         a record 14 FA Cups, two League Cups, 16 FA Community Shields, one European Cup Winners' Cup, and one Inter-Cities Fairs Cup. 
        In terms of trophies won, it is the third-most successful club in English football. 
        </p>
        <div className="btnBox">
            <div className = "btn">
                <NavLink to="#" className="readMore">Read More</NavLink>
            </div>
        </div>
        </div>
        <div className="imgContainer">
            <img src={homeimg} alt="home"/>
        </div>

    </div>

        </>
    )
}

export default Home