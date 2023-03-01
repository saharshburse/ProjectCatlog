import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <Link to="/admin">
        <button>ADMIN RENDER xD</button>
      </Link>
      <Link to="/login">
        <button>LOGIN PAGE</button>
      </Link>
      <Link to="/CreateAccount">
        <button>Create Account</button>
      </Link>
      <Link to="/Gallery">
        <button>Gallery</button>
      </Link>
      <Link to="/List">
        <button>List</button>
      </Link>
    </div>
  );
};

export default Home;
