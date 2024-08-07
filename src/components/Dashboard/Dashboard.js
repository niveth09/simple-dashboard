import React from "react";
import { DashboardWrapper, CardWrapper } from "./Dashboard.styled";
import ActivityChart from "../ActivityChart/ActivityChart";
import ProfitPieChart from "../ProfitPieChart/ProfitPieChart";
import OrderTable from "../OrderTable/OrderTable.js";
import FeedbackTable from "../FeedbackTable/FeedbackTable.js";

const Dashboard = () => (
  <DashboardWrapper>
    <div className="container-fluid p-4 w-100">
      <div className="h3 fw-bold d-sm-flex align-items-center justify-content-between mb-4">
        Dashboard
      </div>
      <div>
        <div className="row g-0 gap-2  align-items-stretch text-start">
          <div className="col-xl-2 col-md-2 mb-4 ">
            <div className="card h-100 py-2 p-2 ">
              <div className="row g-0 align-items-center">
                <span className="col-auto mt-2">
                  <i
                    className="bi bi-basket-fill rounded-2 p-2 col-auto"
                    style={{
                      backgroundColor: "rgb(40,52,109)",
                      color: "rgb(57,90,245)",
                    }}
                  ></i>
                </span>
              </div>

              <div className="card-body mt-3">
                <div className="card-title p">Total Orders</div>
                <div className="card-text">
                  <div className="row g-0 align-items-center">
                    <div className="col mr-2 align-items-stretch">
                      <p className="h3 fw-bold">75</p>
                    </div>
                    <div className="col-auto">
                      <span className="p increment">
                        <i className="bi bi-caret-up-fill"></i>3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2  col-md-2 mb-4">
            <div className="card h-100 py-2 p-2">
              <div className="row g-0 align-items-center">
                <span className="col-auto mt-2 align-items-stretch">
                  <i
                    className="bi bi-bag-check-fill rounded-2 p-2"
                    style={{
                      backgroundColor: "rgb(18,81,67)",
                      color: "rgb(3,199,140)",
                    }}
                  ></i>
                </span>
              </div>

              <div className="card-body mt-3">
                <div className="card-title p">Total Delivered</div>
                <div className="card-text">
                  <div className="row g-0 align-items-center">
                    <div className="col mr-2 align-items-stretch">
                      <p className="h3 fw-bold">70</p>
                    </div>
                    <div className="col-auto">
                      <span className="p decrement">
                        <i className="bi bi-caret-down-fill"></i>3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2  col-md-2 mb-4">
            <div className="card h-100 py-2 p-2">
              <div className="row g-0 align-items-center">
                <span className="col-auto mt-2 align-items-stretch">
                  <i
                    className="bi bi-bag-x-fill rounded-2 p-2"
                    style={{
                      backgroundColor: "rgb(98,51,52)",
                      color: "rgb(235,99,98)",
                    }}
                  ></i>
                </span>
              </div>

              <div className="card-body mt-3">
                <div className="card-title p">Total Cancelled</div>
                <div className="card-text">
                  <div className="row g-0 align-items-center">
                    <div className="col mr-2 align-items-stretch">
                      <p className="h3 fw-bold">05</p>
                    </div>
                    <div className="col-auto">
                      <span className="p increment">
                        <i className="bi bi-caret-up-fill"></i>3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2  col-md-2 mb-4">
            <div className="card h-100 py-2 p-2">
              <div className="row g-0 align-items-center">
                <span className="col-auto mt-2 align-items-stretch mt-2">
                  <i
                    className="bi bi-graph-up-arrow g-0 rounded-2 p-2"
                    style={{
                      backgroundColor: "rgb(90,42,75)",
                      color: "rgb(219,65,152)",
                    }}
                  ></i>
                </span>
              </div>

              <div className="card-body mt-3">
                <div className="card-title p">Total Revenue</div>
                <div className="card-text">
                  <div className="row g-0 align-items-center">
                    <div className="col mr-2 align-items-stretch">
                      <p className="h3 fw-bold">$12k</p>
                    </div>
                    <div className="col-auto align-items-stretch">
                      <span className="p decrement">
                        <i className="bi bi-caret-down-fill"></i>3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 mb-4">
            <div className="card h-100 py-2">
              <div className="card-body">
                <div className="card-title p">Net Profit</div>
                <div className="row g-0 align-items-center">
                  <div className="col-md-6">
                    <p className="h3 fw-bold">$6759.25</p>
                    <p className="p increment">
                      <i className="bi bi-caret-up-fill"></i>3%
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="chart-pie">
                      <ProfitPieChart></ProfitPieChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0  gap-2  mt-5">
          <div className="col-xl-8 col-lg-8 col-sm-12">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <p className="h3 fw-bold">Activity</p>
                <div className="">
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <ActivityChart></ActivityChart>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-12">
            <div className="card h-100 py-2 ">
              <div className="gap-2 ">
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span>
                      <i
                        className="bi bi-aspect-ratio rounded-5 p-3"
                        style={{
                          backgroundColor: "rgb(96,50,54)",
                          color: "rgb(221,115,61)",
                        }}
                      ></i>
                      <span className="p m-3">Goals</span>
                    </span>
                  </div>
                  <div>
                    <span
                      style={{ backgroundColor: "rgb(69,71,73)" }}
                      className="p-2 rounded-5"
                    >
                      <i className="bi bi-chevron-right h5"></i>
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span>
                      <i
                        className="bi bi-egg-fried rounded-5 p-3"
                        style={{
                          backgroundColor: "rgb(41,50,104)",
                          color: "rgb(124,140,232)",
                        }}
                      ></i>
                      <span className="p m-3">Popular Dishes</span>
                    </span>
                  </div>
                  <div>
                    <span
                      className="p-2 rounded-5"
                      style={{ backgroundColor: "rgb(69,71,73)" }}
                    >
                      <i className="bi bi-chevron-right h5"></i>
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span>
                      <i
                        className="bi bi-backpack-fill rounded-5 p-3"
                        style={{
                          backgroundColor: "rgb(34,73,96)",
                          color: "rgb(42,152,198)",
                        }}
                      ></i>
                      <span className="p m-3">Menus</span>
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        backgroundColor: "rgb(69,71,73)",
                      }}
                      className="p-1 text-center rounded-5"
                    >
                      <i className="bi bi-chevron-right h5"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 gap-2 d-flex align-items-stretch mt-5">
          <div className="col-xl-8 col-lg-7 mr-2">
            <OrderTable></OrderTable>
          </div>
          <div className="col-xl-3 col-lg-5">
            <FeedbackTable></FeedbackTable>
          </div>
        </div>
      </div>
    </div>
  </DashboardWrapper>
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
