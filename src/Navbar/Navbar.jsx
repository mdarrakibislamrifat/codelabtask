import navbarImg from "../assets/logo dark.png";
import arrow1 from "../assets/Arrow1.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mb-4 lg:mb-0 lg:mr-4">Home</li>
      <li className="mb-4 lg:mb-0 lg:mr-4">Services</li>
      <li className="mb-4 lg:mb-0 lg:mr-4">Blog</li>
      <li className="mb-4 lg:mb-0 lg:mr-4">About Us</li>
    </>
  );

  return (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={navbarImg} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          Appointment <img src={arrow1} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
