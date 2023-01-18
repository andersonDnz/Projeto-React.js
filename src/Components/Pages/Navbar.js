
import { Link, useNavigate } from 'react-router-dom';


import List from "../Inputs/List";

import {
  AiOutlineDesktop, 
  AiOutlineShoppingCart, 
  AiOutlineLock,
  AiOutlineBars, 
  AiFillCloud, 
  AiTwotoneCalendar, 
  AiOutlineContainer} from 'react-icons/ai';

import Inputs from '../Inputs/Inputs';

import styles from '../../Components/Pages/Navbar.module.css';

const Navbar= () => {

  let navigate = useNavigate();

  const backHome = () => {
      navigate('/Today');
  };
  
    return   <>
    <div className={styles.navbar2}>
      <nav >
        <AiOutlineBars type='button'
         onClick={backHome} 
         className={styles.img}/>
        <AiFillCloud className={styles.icon}/>
        <Inputs/>

        <ul>
          <li  className={styles.itemm2}>
             <AiTwotoneCalendar/>
            <Link to="Today">Today</Link>
          </li>

          <li className={styles.itemm2}>
             <AiOutlineContainer/>
            <Link to="Inbox">Inbox</Link>
          </li>
        </ul>
  
        <ul>

          <li  className={styles.itemm2}>
             <AiOutlineDesktop/>
            <Link to="Web">Website Redesign</Link>
          </li>

          <li className={styles.itemm2}>
            <AiOutlineShoppingCart/>
            <Link to="Shopping">Shopping</Link>
          </li>

          <li className={styles.itemm2}>
            <AiOutlineLock/>
            <Link to="Denamark">Denamark</Link>
          </li>
          
        </ul>
    </nav>  
    <List/>
    </div>

    </>
};

export default Navbar;