'use strict';

var React = require('react-native');
var { View, WebView, StyleSheet } = React;

var styles = StyleSheet.create({
	webView: {
    flex: 1,
    backgroundColor: '#A9B0B3',
    flexDirection: 'column',
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.webView}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
});