import React from 'react';

class PanelView extends React.Component {
  componentDidMount() {
    this.props.directionsDisplay.setPanel(document.getElementById('panel-view'));
  }

  render() {
    return <div id='panel-view' />;
  }
}

export default PanelView;
