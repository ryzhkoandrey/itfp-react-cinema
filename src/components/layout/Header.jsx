import { Link } from 'react-router-dom';
import logo from '../../assets/icons/pngwing.com.png';
import heart from '../../assets/icons/icons8-червы-100.png';

function Header() {
   return (
      <header>
         <Link className="header__logo-flex" to="/">
            <img src={logo} alt="logo" />
            <div className="header__logo-flex_sitename">
               <p>REACT</p>
               <p>CINEMA</p>
            </div>
         </Link>

         <ul className="header__navbar-flex">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <a href="#movies">Movies</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/help">Help</Link>
         </ul>

         <div className="header__auth-flex">
            <div className="favorites__movies">
               <img src={heart} alt="" />
               <p>0</p>
            </div>
            <Link to="/account">Account</Link>
         </div>
      </header>
   );
}

export default Header;
