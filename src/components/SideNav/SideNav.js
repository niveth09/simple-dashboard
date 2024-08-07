import { React, useState } from "react";
import PropTypes from "prop-types";
import { SideNavWrapper } from "./SideNav.styled";

const SideNav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <SideNavWrapper>
      <nav
        className="navbar-nav navbar-expand-lg navbar-expand-sm  sidebar "
        id="navbarNav"
        data-bs-theme="dark"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="sidebar-sticky navbar-collapse collapse"
          id="navbarSupportedContent"
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span>
                  <i className="bi bi-house-fill"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>
                  <i className="bi bi-bar-chart-fill"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>
                  <i className="bi bi-clipboard-check"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>
                  <i className="bi bi-wallet"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>
                  <i className="bi bi-handbag-fill"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </SideNavWrapper>
  );
};

SideNav.propTypes = {};

SideNav.defaultProps = {};

export default SideNav;
