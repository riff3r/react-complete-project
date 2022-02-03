import React from 'react';

class ClickCount extends React.Component {
  state = {
    count: 0,
  };

  countIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button" onClick={this.countIncrement}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClickCount;
