import React from 'react';
import { connect } from 'react-redux';
import DISCIPLINES from 'consts/disciplines';
import { USERS_LOGOUT } from 'ducks/user';
import Dashboard from './Dashboard';

export class DashboardContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      mapMode: false,
    };
    this.onMapModeChange = this.onMapModeChange.bind(this);

    this.fakeOffers = [
      {
        type: DISCIPLINES.BASKETBALL,
        title: 'test1',
        id: 1,
      },
      {
        type: DISCIPLINES.AMERICAN_FOOTBALL,
        title: 'test2',
        id: 2,
      },
      {
        type: DISCIPLINES.BASKETBALL,
        title: 'test3',
        id: 3,
      },
      {
        type: 'unknown',
        title: 'test3',
        id: 15,
      },
      {
        type: DISCIPLINES.FOOTBALL,
        title: 'test4',
        id: 4,
      },
      {
        type: DISCIPLINES.VOLLEYBALL,
        title: 'test5',
        id: 5,
      },
      {
        type: DISCIPLINES.BASKETBALL,
        title: 'test6',
        id: 6,
      },
      {
        type: DISCIPLINES.TENNIS,
        title: 'test7',
        id: 7,
      },
      {
        type: DISCIPLINES.SQUASH,
        title: 'test8',
        id: 8,
      },
      {
        type: DISCIPLINES.VOLLEYBALL,
        title: 'test12',
        id: 12,
      },
      {
        type: DISCIPLINES.BASKETBALL,
        title: 'test11',
        id: 11,
      },
      {
        type: DISCIPLINES.TENNIS,
        title: 'test10',
        id: 10,
      },
      {
        type: DISCIPLINES.SQUASH,
        title: 'test9',
        id: 9,
      },
    ];
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
        offers={this.fakeOffers}
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
