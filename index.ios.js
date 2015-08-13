/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var App = require('./app/components/app');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

var reddit = React.createClass({
  render: function(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title:'Reddit',
          component: App
        }} />
    )
  }
})





AppRegistry.registerComponent('reddit', () => reddit);
