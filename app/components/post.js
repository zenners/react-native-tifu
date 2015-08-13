var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  postCount: {
  	flex: 1
  },
  subredditTitle: {
  	flex: 1
  },
  row: {
  	flex: 1,
  	alignSelf: 'stretch',
  	right: 0,
  	left: 0,
  	
	justifyContent: 'center',   
	padding: 10, 
  },
  separator: {
  	height: 1,
  	backgroundColor: '#ccc',
  }
});

var Post = React.createClass({
	render: function() {
		return (
		  <TouchableHighlight onPress={this.props.onSelect}>
	        <View>
		        <View style={styles.row}>
		          <Text style={styles.postCount}>
		            {this.props.story.data.score}
		          </Text>
		          <Text style={styles.subredditTitle}>
		            {this.props.story.data.title}
		          </Text>
		        </View>
	         	<View style={styles.separator} />
	         </View>
	      </TouchableHighlight>
		);
	}
});

module.exports = Post;