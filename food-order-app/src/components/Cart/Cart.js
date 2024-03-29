import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = props => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onclick={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
