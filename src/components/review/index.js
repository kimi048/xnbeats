import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviewById } from "../store/actions";
import { Container, Row, Col, Card } from "react-bootstrap";

const Review = (props) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewById(props.match.params.id)).then((response) => {
      if (!response.payload) {
        props.history.push("/");
      }
    });
  }, [props, dispatch]);

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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};
export default Review;
