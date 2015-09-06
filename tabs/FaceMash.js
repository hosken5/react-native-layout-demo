'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS
    } = React;


var Person = React.createClass({
    render: function() {
        var person = this.props.person;
        return (
            <View style={ styles.person }>
                <Text>Person!</Text>
            </View>
        )
    }
});


var facemashTab = React.createClass({
    getInitialState: function() {
        return {
            list: [],
            currentIndex: 0
        };
    },
    componentWillMount: function() {
        fetch('http://localhost:8882/rest/mash')
            .then(res => res.json())
            .then(res => this.setState({ list: res }));
    },
    render: function() {
        var contents ;
        if(!this.state.list.length){
            contents =(
                <View style={ styles.loading }>
                    <Text style={ styles.loadingText }>正在加载...</Text>
                    <ActivityIndicatorIOS />
                </View>
            );
        }else{
            contents  = (
                <View style={ styles.content }>
                    <Text>Loaded</Text>
                </View>) ;
        }
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={ styles.headerText }>FaceMash</Text>
                </View>
                {contents}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 45,
        backgroundColor: '#760004',
        paddingTop: 15,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    loadingText: {
        fontSize: 14,
        marginBottom: 10
    }
});

module.exports = facemashTab;