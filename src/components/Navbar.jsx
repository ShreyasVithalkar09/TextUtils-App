import React from "react";
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className="form-check form-switch">
            
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${props.mode === 'light'? 'dark' : 'light'}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};


Navbar.propTypes = {
  title : PropTypes.string
}

export default Navbar;
