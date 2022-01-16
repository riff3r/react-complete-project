const UserLists = function (props) {
  return (
    <ul>
      {props.users.map(user => (
        <li>
          UserName is {user.username} and Age {user.age})
        </li>
      ))}
    </ul>
  );
};

export default UserLists;
