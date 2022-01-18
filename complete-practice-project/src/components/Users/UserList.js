import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserLists = function (props) {
  console.log(props.user);
  return (
    // if(props.user){}
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>
            UserName is {user.username} and Age {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserLists;
