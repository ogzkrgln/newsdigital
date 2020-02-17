import React, { Component } from 'react';
import { View,Text, StyleSheet,TouchableOpacity,FlatList,ScrollView,Image } from 'react-native';
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements';
import {addNews,setIndex} from './actions';
import {colors,fontSize, paddings,margins,borders,fontWei} from './style/base'


function Item({ title }) {
  return (
    <View >
      <Text style={styles.titleContainer}>{title}</Text>
    </View>
  );
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyArray : [],
      text: ''
    };
  }

  
  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-09&sortBy=publishedAt&apiKey=0b9dd4078dc84f3cad806d85284c937c")
      .then(res => res.json())
      .then(
        (result) => {
          this.props.addNewsData(result.articles)
          this.setState({emptyArray:result.articles})
        },
        (error) => {
          console.log(error);
        }
      )
  }

  goToNextScreen = (index) => {
    this.props.setItemIndex(index)
    this.props.navigation.navigate('Details')
  }

  renderHeader = () => {    
    return (      
      <SearchBar        
        placeholder="Type Here..."        
        lightTheme        
        round        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false} 
        value={this.state.text}         
      />    
    );  
  };

  searchFilterFunction = text => {    
    const newData = this.state.emptyArray.filter(item => {      
      const itemData = `${item.title.toUpperCase()}   
      ${item.title.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    this.setState({text:text})
    this.props.addNewsData(newData)
  };

  render() {
    return (
      <ScrollView>
      <View> 
      {this.props.news.loader ? 
      (<FlatList data={this.props.news.news}
      extraData={this.props.news.loader}
      renderItem={({item, index}) => ( 
        <View >
          {item.urlToImage && (
            <TouchableOpacity style={styles.itemAndImageArea} activeOpacity={1} onPress={() => this.goToNextScreen(index)}>
              <Image
              style={{width: '100%', height: 200}}
              source={{uri: item.urlToImage}}
            />
            <Item title={item.title}></Item>
            </TouchableOpacity>
          )}
        </View> )}
        
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={this.renderHeader}   
        />):
      (<Text>Veriler yükleniyor..</Text>)}
      </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  titleContainer: {
    fontSize: fontSize.FONT_SIZE_MEDIUM,
    paddingVertical: paddings.PADDING_EXTRA_SMALL,
    fontWeight: fontWei.FONT_BOLD
  },
  itemAndImageArea : {
    borderColor: colors.black,
    margin: margins.MARGIN_EXTRA_SMALL,
    borderWidth: borders.BORDER_WIDTH,
    borderColor: borders.BORDER_COLOR,
    padding: paddings.PADDING_SMALL,
  }
});

  const mapStateToProps = (state) => ({
    news:state.news
  })
  const mapDispatchToProps = (dispatch) => ({
    addNewsData: (data) => dispatch(addNews(data)),
    setItemIndex: (data) => dispatch(setIndex(data)),
  })
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeScreen)
  