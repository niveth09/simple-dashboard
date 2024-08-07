import React from "react";
import { FeedbackTableWrapper } from "./FeedbackTable.styled";
import { FeedbackData } from "../../utils/Data.js";
import { Rating } from "../Rating/Rating";

const FeedbackTable = () => (
  <FeedbackTableWrapper>
    <div
      data-spy="scroll"
      data-target="#list-example"
      data-offset="0"
      className="card feedback-card"
      style={{ overflow: "auto" }}
    >
      <p className="h3 fw-bold">Customer's feedback</p>
      {FeedbackData.map((ele, index) => (
        <tr className="p" key={index}>
          <p className="p">
            {/* <img
              src={require("../../assets/me-cropped.jpg")}
              className="profile-img rounded-circle"
            /> */}
            {ele.customerName}
          </p>
          {/* <p>
            <div>
              <span className="star">
                <span className="half" style={{ width: "fill" }}>
                  <em className="fa fa-star text-warning"></em>
                </span>
                <em className="fa fa-star-o text-warning cursor"></em>
              </span>
            </div>

            <Rating rate={ele.rating} max="5"></Rating>
          </p> */}

          <p>{ele.comment}</p>
        </tr>
      ))}
    </div>
  </FeedbackTableWrapper>
);

FeedbackTable.propTypes = {};

export default FeedbackTable;
