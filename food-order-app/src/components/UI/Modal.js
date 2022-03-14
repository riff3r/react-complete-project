import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
  return <div onClick={props.onclick} className={classes.backdrop} />;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  console.log(props);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onclick={props.onclick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
