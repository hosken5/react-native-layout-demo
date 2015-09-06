/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator
    } = React ;

var MySceneComponent =require('./layoutDemo');

//require('react-native').AppRegistry.registerComponent('layout_demo', () => require('./layoutDemo'));

var hello  =  React.createClass({
    render:function(){
        return(
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <MySceneComponent
                        name={route.name}
                        onForward={() => {
                            var nextIndex = route.index + 1;
                            navigator.push({
                                name: 'Scene ' + nextIndex,
                                index: nextIndex
                            });
                        }}
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                    }
            />
        );
    }
});



AppRegistry.registerComponent('layout_demo', () => hello);
