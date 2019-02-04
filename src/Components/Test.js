import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';

class Test extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome To React native {name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const mapStateToProps = state => {
  return {
    name: state.AuthReducer.name
  };
};

export default connect(
  mapStateToProps,
  null
)(Test);