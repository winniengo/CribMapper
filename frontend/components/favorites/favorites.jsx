import React from 'react';

class Favorites extends React.Component{
  // constructor(props) {
  //   super(props);
  // }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push('/');
    }
  }

  render() {
    return (
      <div>Favorites</div>
    );
  }
}

export default Favorites;
