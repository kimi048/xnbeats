import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviewById, clearReview } from "../store/actions";
import { Container, Row, Col, Card } from "react-bootstrap";
import ReactStars from "react-star-rating-component";
import { useLocation } from "react-router-dom";
import SpinnerComp from "../../utils/spinner";

const Review = (props) => {
  const { pathname } = useLocation();
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getReviewById(props.match.params.id)).then((response) => {
      if (!response.payload) {
        props.history.push("/");
      }
    });
  }, [props, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearReview());
      console.log("*** unmounted");
    };
  }, [dispatch]);
  return (
    <Container className="page">
      {reviews.reviewById ? (
        <div>
          <Row className="mt-5">
            <Col xs={12} md={8}>
              <small>Reviewed by: {reviews.reviewById.ownerData.name}</small>
              <h1>{reviews.reviewById.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: reviews.reviewById.content }}
              ></div>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <div className="card_image">
                  <Card.Img
                    variant="top"
                    src={reviews.reviewById.downloadUrl}
                  />
                  <div className="card_blur"></div>
                </div>
                <Card.Body>
                  <Card.Title>Our rating</Card.Title>
                  <ReactStars
                    name="stars"
                    count={5}
                    value={reviews.reviewById.rating}
                    size={24}
                    edit={false}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      ) : <SpinnerComp/>}
    </Container>
  );
};
export default Review;
