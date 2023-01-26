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

import Search from "../../components/Search";

import AddListButton from "../../components/AddListButton";

import styles from "./styles.module.css";

const Navbar = () => {
  let navigate = useNavigate();

  const backHome = () => {
    navigate("/Today");
  };

  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <AiOutlineBars className={styles.img} type="button" onClick={backHome} />
          <AiFillCloud className={styles.icon_nuvem} />

          <div>
            <Search/>
          </div>

          <ul>
            <li className={styles.page}>
              <AiTwotoneCalendar />
              <Link to="Today">Today</Link>
            </li>

            <li className={styles.page}>
              <AiOutlineContainer />
              <Link to="Inbox">Inbox</Link>
            </li>
          </ul>

          <ul>
            <li className={styles.page}>
              <AiOutlineDesktop />
              <Link to="Website">Website Redesign</Link>
            </li>

            <li className={styles.page}>
              <AiOutlineShoppingCart />
              <Link to="Shopping">Shopping</Link>
            </li>

            <li className={styles.page}>
              <AiOutlineLock />
              <Link to="Denamark">Denamark</Link>
            </li>
          </ul>
        </nav>
        <AddListButton />
      </div>
    </>
  );
};

export default Navbar;