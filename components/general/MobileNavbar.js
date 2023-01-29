import React from "react";
import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/Bi";
import { useRouter } from "next/router";

function MobileNavbar() {
  const router = useRouter();

  return (
    <div>
      <h1>
        <nav className="nav">
          <div className="nav-container">
            <div className="navicon">
              <Link href="/">
                <a className="nav-link">
                  <AiOutlineHome
                    className="icon"
                    id={router.pathname == "/" ? "active" : ""}
                  />
                  <span
                    className="navtextM"
                    id={router.pathname == "/" ? "active" : ""}
                  >
                    Home
                  </span>
                </a>
              </Link>
            </div>
            <div className="navicon">
              <Link href="/profile">
                <a className="nav-link">
                  <BiUserCircle
                    className="icon"
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
                    className="navtextM"
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
            </div>
            <div className="navicon">
              <Link href="/create-new-ad">
                <a className="nav-link">
                  <AiOutlinePlusCircle
                    className="icon"
                    id={router.pathname == "/create-new-ad" ? "active" : ""}
                  />
                  <span
                    className="navtextM"
                    id={router.pathname == "/create-new-ad" ? "active" : ""}
                  >
                    Sell
                  </span>
                </a>
              </Link>
            </div>
            <div className="navicon">
              <Link href="/market/all-adverts">
                <a className="nav-link">
                  <AiOutlineShop
                    className="icon"
                    id={
                      router.pathname == "/market/all-adverts" ? "active" : ""||
                      router.pathname == "/posts/[product]" ? "active" : ""
                    }
                  />
                  <span
                    className="navtextM"
                    id={
                      router.pathname == "/market/all-adverts" ? "active" : "" ||
                      router.pathname == "/posts/[product]" ? "active" : ""
                    }
                  >
                    Market
                  </span>
                </a>
              </Link>
            </div>
            <div className="navicon">
              <Link href="/favorites">
                <a className="nav-link">
                  <AiFillHeart className="icon" style={{ color: "#ea4c89" }} />
                  <span className="navtextM" style={{ color: "#ea4c89" }}>
                    Favorites
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </h1>
    </div>
  );
}

export default MobileNavbar;
