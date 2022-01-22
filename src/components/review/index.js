import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Review = (props) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  return <div>review</div>;
};
export default Review;
