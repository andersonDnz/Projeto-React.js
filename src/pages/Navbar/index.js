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
import Div from "./styles";

import AddListButton from "../../components/AddListButton";

import styles from "./styles.module.css";

function Navbar() {
  let navigate = useNavigate();

  const backHome = () => {
    navigate("/Today");
  };

  return (
    <>
      <Div>
        <AiOutlineBars
          className={styles.img}
          type="button"
          onClick={backHome}
        />
        <AiFillCloud className={styles.icon_nuvem} />

        <div>
          <Search />
        </div>

        <ul>
          <li>
            <AiTwotoneCalendar />
            <Link to="Today">Today</Link>
          </li>

          <li>
            <AiOutlineContainer />
            <Link to="Inbox">Inbox</Link>
          </li>
        </ul>

        <ul>
          <li>
            <AiOutlineDesktop />
            <Link to="Website">Website Redesign</Link>
          </li>

          <li>
            <AiOutlineShoppingCart />
            <Link to="Shopping">Shopping</Link>
          </li>

          <li>
            <AiOutlineLock />
            <Link to="Denamark">Denamark</Link>
          </li>
        </ul>

        <AddListButton />
      </Div>
    </>
  );
}

export default Navbar;
