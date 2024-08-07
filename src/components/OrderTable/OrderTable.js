import React from "react";
import { Data } from "../../utils/Data.js";
import { OrderTableWrapper } from "./OrderTable.styled";

const OrderTable = () => (
  <OrderTableWrapper>
    <div className="card d-flex align-items-stretch table-responsive">
      <p className="h3 fw-bold">Recent Orders</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Order No.</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((elementInArray, index) => (
            <tr key={index} className="m-3 orders">
              <td>
                <img
                  src={elementInArray.customerProfileImg}
                  className="profile-img"
                />

                {elementInArray.customerName}
              </td>
              <td>{elementInArray.orderNo}</td>
              <td>{elementInArray.amount}</td>
              <td>
                <span
                  className={
                    elementInArray.status === "Delivered"
                      ? "finished"
                      : elementInArray.status === "Pending"
                      ? "pending"
                      : "cancelled"
                  }
                >
                  {elementInArray.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </OrderTableWrapper>
);

OrderTable.propTypes = {};

OrderTable.defaultProps = {};

export default OrderTable;
