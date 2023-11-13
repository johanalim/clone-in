import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

const Header = ({ className }) => {
  const classNames = classname('header', className);
  return (
    <div className={classNames}>
        <div className='container'>
            <div className='side-left'>
                <img alt=''/>
            </div>
            <div className='side-center'>
                <ul>
                    <li>Beranda</li>
                    <li>Tentang Kami</li>
                    <li>Produk & Layanan</li>
                    <li>Hubungi Kami</li>   
                </ul>
            </div>
            <div className='side-right'></div>
        </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;