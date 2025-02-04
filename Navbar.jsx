import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDrop,setDrop]=useState(false);
  const toggledown=()=>{
    setDrop(!isDrop);
  }
  return (
    <nav id="nav">
      <Link to="/" className="nav-link"><h3 className="nav-item">Home</h3></Link>
      <div className="nav-item">
        <h3 className="nav-item" onClick={toggledown}>About</h3>
        {isDrop &&(
          <div className="dropcontent">
            <div className="inside">
              <Link to="/gfg" className="drop-link">GFG</Link>
            </div>
            <div className="inside">
              <Link to="/leetcode" className="drop-link">LEETCODE</Link>
            </div>
            <div className="inside">
              <Link to="/hackerrank" className="drop-link">HACKERRANK</Link>
            </div>
            <div className="inside">
              <Link to="/smartinterviews" className="drop-link">SMART-INTERVIEWS</Link>
            </div>
            <div className="inside">
              <Link to="/codechef" className="drop-link">CODECHEF</Link>
            </div>
          </div>
        )}
      </div>
      <Link to="/projects" className="nav-link"><h3 className="nav-item">Projects</h3></Link>
      <Link to="/skills" className="nav-link"><h3 className="nav-item">Skills</h3></Link>
      <Link to="/contact" className="nav-link"><h3 className="nav-item">Contact</h3></Link>
    </nav>
  );
}

export default Navbar;
