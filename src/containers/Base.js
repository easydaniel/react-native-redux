import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BaseActions from '../actions/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class Base extends Component {

  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
  }

  print() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.print}>
          <Text>
            {this.props.name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  (state) => ({
    name: state.base.name
  }),
  (dispatch) => (bindActionCreators(BaseActions, dispatch)))(Base);
