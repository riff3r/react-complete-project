import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>ReactMeals</h3>
        <button>Cart</button>
      </header>

      <div className={classes['main-image']}>
        <img src={HeaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
