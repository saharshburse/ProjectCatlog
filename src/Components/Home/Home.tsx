import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

interface Props { }

const Home: React.FC<Props> = () => {
  return (
    <div className="homemain">
      <div className="homecontainer">
        <div><Link to="/list">
          <button>View Catlog</button>
        </Link> </div>
      </div>
    </div>
  );
};

export default Home;
