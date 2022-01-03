const User = function () {
  return (
    <form>
      <label>Username</label> <br />
      <input type="text" id="user" name="user" />
      <br /> <br />
      <label>Age (Years)</label> <br />
      <input type="number" id="age" name="age" />
      <br />
      <br />
      <button>Add user</button>
    </form>
  );
};

export default User;
