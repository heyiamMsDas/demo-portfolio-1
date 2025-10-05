
import { HashRouter as Router , Routes , Route , Link , useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import homeImg from "../public/image/demo-homepage.jpg" ;
import "./App.css" ;

import studyImg from "../public/image/demo-studypage.jpg" ;

function Navbar() {

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Study">Study</Link>
      <Link to="/Hobby">Hobby</Link>
      <Link to="/Developer">Developer</Link>

    </div>
  );


}

function Developer() {

  return (
    <div className="developer">

      <div className="dev-intro" style={{
           background: "linear-gradient(90deg, white, navy)", // gradient from white to navy
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "20px 0"
      }}>
        I am the Developer of this website <br />
        Check out my profiles Below
      </div>
       <div className="profile">
        <a href="https://instagram.com/msdas7476" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/X_dasMLEngr" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> {/* X logo uses Twitter icon as placeholder */}
        </a>
        <a href="https://linkedin.com/in/madhusudan-das-23cs8072" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/heyiamMsDas" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

    </div>

  );
  


}



function Home() {

  return (
    <div className="home">
      
      <div className="welcome">
        🙋🏽‍♀️ Guys!!! Welcome to my Website. <br />
        This is Monalisa Here.
      </div>
      <div>
        <img className="home-image" src={homeImg} alt="home-image" />
      </div>

      <div>

      </div>
     

      </div>

  );

}

function Hobby() {

  return (
    <div className="hobby">

      <div className="hobby-word">
        My hobby is to watch Television and Mobile phone 😁
      </div>


    </div>

  );

}

function Study() {
  const navigate = useNavigate() ;
  const gotoDeveloper = () => {
    navigate("/Developer") ;
  }

  return (
    <div className="study">

   

      <div className="intro">
        I am in class 10th standard right now.
        <br />
        May be in Future I will be scientist,doctor,engineer or something else who knows 🤗.

      </div>
       <div className="click">
        <img className="study-image" src= {studyImg} alt="click here image" />
        <button className="study-button" onClick={gotoDeveloper}>Know Developer</button>
      </div>



    </div>

  );

}



function App() {

  return ( 
     <Router>

     <div className="app">
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Study" element={<Study/>}></Route>
        <Route path="/Hobby" element={<Hobby/>}></Route>
        <Route path="/Developer" element={<Developer/>}></Route>

      </Routes>

      
    </div>

    
    </Router>

    ) ;

}

export default App ;
