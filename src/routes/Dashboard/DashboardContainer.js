import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { USERS_LOGOUT } from './../../ducks/user';

export class DashboardContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      mapMode: false,
    };
    this.onMapModeChange = this.onMapModeChange.bind(this);
  }

  onMapModeChange() {
    this.setState({
      mapMode: !this.state.mapMode,
    });
  }

  render() {
    return (
      <Dashboard
        {...this.props}
        mapMode={this.state.mapMode}
        onModeChange={this.onMapModeChange}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(USERS_LOGOUT());
    },
  };
}

export default connect(null, mapDispatchToProps)(DashboardContainer);
