import React from 'react';

class Alert extends React.Component {
  componentWillReceiveProps({ alert, clearAlert }) {
    if (alert) {
      // setTimeout(clearAlert, 3000);
    }
  }

  render() {
    return (
      <div className='alert'>
        {this.props.alert}
      </div>
    );
  }
}

export default Alert;
