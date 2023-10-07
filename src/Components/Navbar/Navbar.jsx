import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const NavLinks = (
    <>
      <li className="text-base text-black font-medium uppercase">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-green-700 underline bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base text-black font-medium uppercase">
        <NavLink
          to="/travel"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-700 underline" : ""
          }
        >
          Travel
        </NavLink>
      </li>
      <li className="text-base text-black font-medium uppercase">
        <NavLink
          to="/booked"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-700 underline" : ""
          }
        >
          Booked Plan
        </NavLink>
      </li>
      <li className="text-base text-black font-medium uppercase">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-700 underline" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <li className="text-base text-black font-medium uppercase">
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-700 underline" : ""
            }
          >
            Profile
          </NavLink>
        </li>
      )}
      {!user && (
        <li className="text-base text-black font-medium uppercase">
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-700 underline" : ""
            }
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar px-5 md:px-10 lg:px-36 py-5 md:py-10 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 gap-10"
            >
              {NavLinks}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-semibold text-green-800 ">
            Green Quest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-10">{NavLinks}</ul>
        </div>
        <div className="navbar-end gap-8">
          {user ? (
            <>
              <p>{user.displayName}</p>
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </>
          ) : (
            <FaUserCircle className="text-3xl hover:text-green-700"></FaUserCircle>
          )}

          {user ? (
            <Link
              onClick={handleSignOut}
              className="text-base text-black font-medium uppercase"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-base text-black font-medium uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
