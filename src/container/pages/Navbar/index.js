import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.css';

const Navbar = ({ className }) => {
  const classNames = classname('header', className);
  return (
    <div className={classNames}>
            <div className='side-left'>
                <img alt='logo.png'/>
            </div>
            <div className='side-center'>
                <ul>
                    <li>Beranda</li>
                    <li>Tentang Kami</li>
                    <li>Produk & Layanan</li>
                    <li>Hubungi Kami</li>   
                </ul>
            </div>
            <div className='side-right'>
              
            </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string
};

Navbar.defaultProps = {
  className: ''
};

export default Navbar;