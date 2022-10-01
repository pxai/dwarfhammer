import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
        <div id='logo'>
        </div>
        <div id='header'>
          <ul>
            <li>
              <Link className='nav-link' to='/'>
                Bidali berria
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