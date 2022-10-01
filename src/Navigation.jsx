import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <Fragment>
        <div id='logo'>
        </div>
        <div id='header'>
          <ul>
            <li>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/place'>
                Place
              </Link>
            </li>

              <li>
                <Link className='nav-link' to='/about'>
                  Erregistratu
                </Link>
              </li>
          </ul>
        </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;