import { Link, useNavigate } from "react-router-dom";

import {
  AiOutlineDesktop,
  AiOutlineShoppingCart,
  AiOutlineLock,
  AiOutlineBars,
  AiFillCloud,
  AiTwotoneCalendar,
  AiOutlineContainer,
} from "react-icons/ai";


import Add from "../components";

import styles from "../Pages/Navbar.module.css";
import Search from "../components/Search";

const Navbar = () => {
  let navigate = useNavigate();

  const backHome = () => {
    navigate("/Today");
  };

  return (
    <>
      <div className={styles.navbar2}>
        <nav>
          <AiOutlineBars
            type="button"
            onClick={backHome}
            className={styles.img}
          />
          <AiFillCloud className={styles.icon} />

          <div>
            <Search/>
          </div>

          <ul>
            <li className={styles.itemm2}>
              <AiTwotoneCalendar />
              <Link to="Today">Today</Link>
            </li>

            <li className={styles.itemm2}>
              <AiOutlineContainer />
              <Link to="Inbox">Inbox</Link>
            </li>
          </ul>

          <ul>
            <li className={styles.itemm2}>
              <AiOutlineDesktop />
              <Link to="Website">Website Redesign</Link>
            </li>

            <li className={styles.itemm2}>
              <AiOutlineShoppingCart />
              <Link to="Shopping">Shopping</Link>
            </li>

            <li className={styles.itemm2}>
              <AiOutlineLock />
              <Link to="Denamark">Denamark</Link>
            </li>
          </ul>
        </nav>
        <Add />
      </div>
    </>
  );
};

export default Navbar;
