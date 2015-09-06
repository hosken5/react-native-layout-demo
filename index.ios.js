var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    StatusBarIOS
    } = React;
var FaceMashTab = require('./tabs/FaceMash');
var MessagesTab = require('./tabs/Messages');
var layout_demo = require('./layoutDemo');
var facemash = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'faceMash'
        }
    },
    changeTab(tabName) {
        StatusBarIOS.setStyle(tabName === 'faceMash' ? 1 : 0);
        this.setState({
            selectedTab: tabName
        });
    },
    render: function() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="FaceMash"
                //icon={ require('image!facemash') }
                    selected={ this.state.selectedTab === 'faceMash' }
                    onPress={ () => this.changeTab('faceMash') }
                >
                    <FaceMashTab />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Messages"
                 //icon={ require('image!messages') }
                    selected={ this.state.selectedTab === 'messages' }
                    onPress={ () => this.changeTab('messages') }
                >
                <MessagesTab/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Settings"
                  //icon={ require('image!settings') }
                    selected={ this.state.selectedTab === 'settings' }
                    onPress={ () => this.changeTab('settings') }
                >
                    <View style={ styles.pageView }>
                        <Text>Settings</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    pageView: {
        backgroundColor: '#fff',
        flex: 1
    }
});

AppRegistry.registerComponent('layout_demo', () => facemash);