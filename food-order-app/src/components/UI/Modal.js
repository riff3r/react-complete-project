import { Fragment } from 'react';
import ReactDOM from 'react';

import classes from './Modal.module.css';

const Backdrop = props => <div className={classes.backdrop} />;

const ModalOverlay = props => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');
console.log(portalElement);

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
