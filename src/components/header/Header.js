import React from "react";
import "./Header.scss";
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";



const activeLink = ({ isActive }) => (isActive ? "active" : "");


const user = JSON.parse(localStorage.getItem("name"))
const avatar = JSON.parse(localStorage.getItem("photo"))
// console.log(user)
// const user = "Sylu"

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");

    };
    console.log(user);


    return (
        <header className="header">
            <nav>
                <div className="logo" onClick={goHome}>
                    <BiLogIn size={35} />
                    <span>AUTH:Z</span>
                </div>

                <ul className="home-links">

                    <li className="--flex-center">
                        <img src={avatar} className="avatarImg"/>
                        {/* <FaUserCircle size={20} /> */}
                        <p className="--color-white">Hi,{user}</p>
                    </li>


                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/login">Login</Link>
                        </button>
                    </li>

                    <li>
                        <NavLink to="/profile" className={activeLink}>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <button className="--btn --btn-secondary">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;