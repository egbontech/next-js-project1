import React from "react";
import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineShop,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/Bi";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-left">
            <h2 className="logo">LOGO</h2>
          </div>
          <div className="search-link ">
            <Link href="/search/search-page">
            <a  id={router.pathname == "/search/search-page" ? "search-link-active" : ""}>   
                <p>Search</p>
                <AiOutlineSearch className="i"/>        
            </a>
            </Link>
            </div>                
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <Link href="/">
                  <a>
                    <AiOutlineHome
                      className="nav-icon"
                      id={router.pathname == "/" ? "active" : ""}
                    />
                    <span
                      className="navtext"
                      id={router.pathname == "/" ? "active" : ""}
                    >
                      Home
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a>
                    <BiUserCircle
                      className="nav-icon"
                      id={
                        router.pathname == "/profile" ||
                        router.pathname == "/profile/account-settings" ||
                        router.pathname == "/profile/edit-profile" ||
                        router.pathname == "/profile/update-profile-picture" ||
                        router.pathname == "/profile/update-password" ||
                        router.pathname == "/profile/manage-ads"
                          ? "active"
                          : ""
                      }
                    />
                    <span
                      className="navtext"
                      id={
                        router.pathname == "/profile" ||
                        router.pathname == "/profile/account-settings" ||
                        router.pathname == "/profile/edit-profile" ||
                        router.pathname == "/profile/update-profile-picture" ||
                        router.pathname == "/profile/update-password" ||
                        router.pathname == "/profile/manage-ads"
                          ? "active"
                          : ""
                      }
                    >
                      Profile
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/create-new-ad">
                  <a>
                    <AiOutlinePlusCircle className="nav-icon" id={router.pathname == "/create-new-ad" ? "active" : ""}/>
                    <span className="navtext"id={router.pathname == "/create-new-ad" ? "active" : ""}>Sell</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/market/all-adverts">
                  <a>
                    <AiOutlineShop className="nav-icon" id={router.pathname == "/market/all-adverts" ||
                      router.pathname == "/posts/[product]" ? "active" : "" ? "active" : ""}/>
                    <span className="navtext"id={router.pathname == "/market/all-adverts" ||
                      router.pathname == "/posts/[product]" ? "active" : "" ? "active" : ""}>Market</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <a>
                    <AiFillHeart
                      className="nav-icon"
                      style={{ color: "#ea4c89" }}
                    />
                    <span className="navtext" style={{ color: "#ea4c89" }}>
                      Favorites
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div
              className="online"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link href="/account/login">
                <a>Login</a>
              </Link>
              {/*   <img src="/assets/images/p.jpg" alt="profile-picture" className="nav-profile-img"/> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
