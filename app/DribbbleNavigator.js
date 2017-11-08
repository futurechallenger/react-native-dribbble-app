/**
 * Created by Uncle Charlie
 *
 * @flow
 */
import React from 'react';
import {
  Platform,
  BackAndroid,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import { switchTab } from './actions';

import DemoList from './test/demoList';
import ShotList from "./ShotList";

class DribbbleNavigator extends React.Component {
  constructor(props) {
    super(props);

    this._handlers = [];
    this.handleBackButton.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillMount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  

  addBackButtonListener(listener) {
    this._handlers.push(listener);
  }

  reomveBackButtonListener(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  }

  handleBackButton() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const { navigator } = this.refs;
    if(navigator && navigator.getCurrentRoutes().length > 1) {
      //TODO: pop
      return true;
    }

    // if(this.props.tab !== 'schedule')
    return false;
  }

  // render() {
  //   return (
  //     StackNavigator({
  //       Home: {
  //         screen:
  //       }
  //     })
  //   );
  // }
}

const HomeNav = (props) => (
  StackNavigator({
    Home: DemoList
  })
)

const DebutsNav = (props) => (
  StackNavigator({
    Home: DemoList
  }) 
);

const AnimatedNav = (props) => (
  StackNavigator({
    Home: DemoList
  }) 
);

const ReboundsNav = (props) => (
  StackNavigator({
    Home: DemoList
  }) 
);

export default {
  Home: HomeNav,
  Debuts: DebutsNav,
  Animated: AnimatedNav,
  Rebounds: ReboundsNav,
};
