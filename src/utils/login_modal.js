import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const LoginModal = (props) => {
  return (
    <Modal show={props.modalState.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reauthentication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sorry, we need to make sure you are you</p>
        <form onSubmit="">
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="Email"
          />
          <span className="error">Please check your email</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
          />
          <span className="error">error</span>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Reauth
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default LoginModal;
