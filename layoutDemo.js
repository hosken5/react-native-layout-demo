/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  View,
  PixelRatio
} = React;

var Dimensions = require('Dimensions');


var layout_demo = React.createClass({
  onSearchPressed() {
    alert('sdfs');
   //var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
   // this._executeQuery(query);
  },
  render: function() {
    return (
        <View style={styles.flexContainer}>
          <Text style={[styles.text, styles.header,{paddingTop:50}]}>
            嵌套的网格
          </Text>
          <View style={{flexDirection: 'row', height: 200, backgroundColor:"#fefefe", padding: 20}}>
            <View style={{flex: 1, flexDirection:'column', padding: 15, backgroundColor:"#eeeeee"}}>
              <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>
              </View>
              <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
              </View>
            </View>
            <View style={{flex: 1, padding: 15, flexDirection:'row', backgroundColor:"#eeeeee"}}>
              <View style={{flex: 1, backgroundColor:"#aaaabb"}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}>
                  <View style={{flex: 1, backgroundColor:"#eebbaa"}}>
                  </View>
                  <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                  </View>
                </View>
                <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                </View>
              </View>
              <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                <ScrollView style={{flex: 1, backgroundColor:"#bbccdd", padding: 5}}>
                  <View style={{flexDirection: 'row', height: 50, backgroundColor:"#fefefe"}}>
                    <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>
                      <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>
                      </View>
                      <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeeeee"}}>
                      <View style={{flex: 1, backgroundColor:"#aaaabb"}}>
                        <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}>
                          <View style={{flex: 1, backgroundColor:"#eebbaa"}}>
                          </View>
                          <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                          </View>
                        </View>
                        <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                        </View>
                      </View>
                      <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                      </View>
                    </View>
                  </View>
                  <Text style={[styles.text, styles.header, {color: '#ffffff', fontSize: 12}]}>
                  {(function(){
                    var str = '';
                    var n = 100;
                    while(n--) {
                      str += '嵌套的网格' + '\n';
                    }
                    return str;
                  })()}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
          <TouchableHighlight style={styles.button}
              onPress={this.onSearchPressed.bind(this)}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  flexContainer: {
    // 容器需要添加direction才能变成让子元素flex
    flexDirection: 'column'
  },
  circle: {
    backgroundColor: '#fe0000',
    borderRadius: 10,
    width: 20,
    height: 20
  },
  cell: {
    flex: 15,
    height: 50,
    backgroundColor: '#aaaaaa'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  cellfixed: {
    height: 50,
    width: 80,
    backgroundColor: '#fefefe'
  },
  container: {
    backgroundColor: '#F5FCFF'
  },
  text:{
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

module.exports = layout_demo;
//AppRegistry.registerComponent('layout_demo', () => layout_demo);
