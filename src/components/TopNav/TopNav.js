import React from "react";
import PropTypes from "prop-types";
import { TopNavWrapper } from "./TopNav.styled";

const TopNav = () => (
  <TopNavWrapper>
    <div className="navbar navbar-expand topbar mb-4 static-top d-flex justify-content-between">
      {/* <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
      </a> */}
      <form className="d-sm-inline-block form-inline ml-2 mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group col-md-6 input-group rounded-2">
          <div className="input-group-prepend">
            <i className="bi bi-search bi-sm"></i>
          </div>
          <input
            type="text"
            className="form-control  border-0 "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </form>
      <ul className="navbar-nav gap-2">
        <li className="icon-wrapper rounded-circle nav-item">
          <i className="bi bi-envelope icon"></i>
        </li>
        <li className="icon-wrapper rounded-circle nav-item ">
          <i className="bi bi-gear icon"></i>
        </li>
        <li className="icon-wrapper rounded-circle nav-item ">
          <i className="bi bi-bell icon"></i>
        </li>
        <li className=" nav-item ">
          <img
            src={require("../../assets/me-cropped.jpg")}
            className="icon-img rounded-circle "
          />
        </li>
      </ul>
    </div>
  </TopNavWrapper>
);

TopNav.propTypes = {};

TopNav.defaultProps = {};

export default TopNav;
