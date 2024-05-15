import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  // theme togle
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "luxury");
      setTheme("luxury");
      document.querySelector("html").setAttribute("data-theme", "luxury");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };
  // console.log(theme);

  const handleLogOut = () => {
    logOut();
    console.log("log out succed");

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Successfully loged out!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(location?.state ? location.state : "/");
  };

  // route links
  const links = (
    <Zoom>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#2ECC71" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              // border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#2ECC71" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/need_Volunteer"
        >
          Need Volunteer
        </NavLink>
      </li>

      <li className="z-50">
        <div className="dropdown z-50 ">
          <div tabIndex={0} role="button" className="  m-1">
            My Profile
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52 mt-36"
          >
            <li>
              <NavLink
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    // border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#2ECC71" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to="/add_post"
              >
                Add Post
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    // border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#2ECC71" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to="/my_post"
              >
                My Post
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
    </Zoom>
  );
  return (
    <div className=" mx-auto my-4 z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* links */}
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/7G9wvG3/image-removebg-preview.png"
              className="size-12"
              alt=""
            />
            <a className="font-bold text-xl">EngageEase</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 items-center ">
            {/* links */}
            {links}
          </ul>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div className="navbar-end ">
          <div className="">
            {/* user profile */}
            {user && (
              <div
                tabIndex={0}
                role="button"
                className=" w-12 h-12 rounded-full dropdown dropdown-hover dropdown-end "
              >
                {/* dropdown user */}
                <div className=" rounded-full ">
                  <div className=" rounded-full ">
                    <img
                      className="rounded-full w-12 h-12"
                      alt="Tailwind CSS Navbar component "
                      src={user.photoURL}
                    />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 "
                  >
                    <li>
                      <a>{user.displayName}</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className="btn">
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {!user && (
            <>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </>
          )}

          {/* theme controler */}
          <div>
            <label className="cursor-pointer grid place-items-center ml-4">
              <input
                onChange={toggleTheme}
                checked={theme === "luxury"}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
