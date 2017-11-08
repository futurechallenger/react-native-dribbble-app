/**
 * This is a sample for how to use TabNavigator in `react-navigation`.
 * In android file, we will use drawer view in `react-navigation`.
 */
//@flow

import React from 'react'
import {
  TabBarIOS,
  TabBarItemIOS,
} from 'react-native'
import TabNavigator from 'react-navigation';

import AppColors from '../common/AppColors'
import { connect } from 'react-redux'
import { switchTab } from '../actions'

import DribbbleNavigator from '../DribbbleNavigator';

// class DribbbleTabsView extends React.Component {
//   onTabSelect(tab) {
//     if (this.props.tab !== tab) {
//       this.props.onTabSelect(tab)
//     }
//   }
// 
// render() {
//   return (
//     <TabBarIOS tintColor={AppColors.darkText}>
//       <TabBarItemIOS
//         title="Schedule"
//         selected={this.props.tab === 'schedule'}
//         onPress={this.onTabSelect.bind(this, 'schedule')}
//         icon={scheduleIcon}
//         selectedIcon={scheduleIconSelected}>
//         <GeneralScheduleView
//           navigator={this.props.navigator}
//         />
//       </TabBarItemIOS>
//       <TabBarItemIOS
//         title="My F8"
//         selected={this.props.tab === 'my-schedule'}
//         onPress={this.onTabSelect.bind(this, 'my-schedule')}
//         icon={require('./schedule/img/my-schedule-icon.png')}
//         selectedIcon={require('./schedule/img/my-schedule-icon-active.png')}>
//         <MyScheduleView
//           navigator={this.props.navigator}
//           onJumpToSchedule={() => this.props.onTabSelect('schedule')}
//         />
//       </TabBarItemIOS>
//       <TabBarItemIOS
//         title="Maps"
//         selected={this.props.tab === 'map'}
//         onPress={this.onTabSelect.bind(this, 'map')}
//         icon={require('./maps/img/maps-icon.png')}
//         selectedIcon={require('./maps/img/maps-icon-active.png')}>
//         <F8MapView />
//       </TabBarItemIOS>
//       <TabBarItemIOS
//         title="Notifications"
//         selected={this.props.tab === 'notifications'}
//         onPress={this.onTabSelect.bind(this, 'notifications')}
//         badge={this.props.notificationsBadge || null}
//         icon={require('./notifications/img/notifications-icon.png')}
//         selectedIcon={require('./notifications/img/notifications-icon-active.png')}>
//         <F8NotificationsView navigator={this.props.navigator} />
//       </TabBarItemIOS>
//       <TabBarItemIOS
//         title="Info"
//         selected={this.props.tab === 'info'}
//         onPress={this.onTabSelect.bind(this, 'info')}
//         icon={require('./info/img/info-icon.png')}
//         selectedIcon={require('./info/img/info-icon-active.png')}>
//         <F8InfoView navigator={this.props.navigator} />
//       </TabBarItemIOS>
//     </TabBarIOS>
//   )
// }
// render() {
//   return (
export default TabNavigator({
  All: {
    screen: DribbbleNavigator.Home,
  },
  Debuts: {
    screen: DribbbleNavigator.Debuts,
  },
  Animated: {
    screen: DribbbleNavigator.Animated,
  },
  Rebounds: {
    screen: DribbbleNavigator.Rebounds,
  }
});
//     );
//   }
// }

// const mapStateToProps = state => ({
//   tab: state.navigation.tab,
//   // notificationsBadge:
// })

// const mapDispatchToProps = dispatch => ({
//   onTabSelect: (tab) => dispatch(switchTab(tab))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(DribbbleTabsView)
