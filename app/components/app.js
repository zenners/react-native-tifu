var React = require('react-native');
var Post = require('./post');
var Story = require('./story');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      dataSource:  new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),

    };
  },
  componentDidMount: function() {
    this.searchReddit()
  },
  searchReddit: function(){
    fetch("http://www.reddit.com/r/tifu/.json").then((r) => r.json()).then((response) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(response.data.children),
        isLoading: false
      });
    }).done();
  },
  renderPosts: function(item){
    return(
      <Post onSelect={() => this.selectStory(item)} story={item}/>
    );
  },
  selectStory: function(item){
    this.props.navigator.push({
      title: item.data.subreddit,
      component: Story,
      passProps: { 
        id: item.data.id,
        title: item.data.title,
        url: item.data.url
      }
    });
  },
  render: function() {
    return (
        <View style={styles.container}>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderPosts} />
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111"
            size="large"></ActivityIndicatorIOS>
        </View>
    );
  }
});



