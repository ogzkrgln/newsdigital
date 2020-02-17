import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import { connect } from 'react-redux'
import {colors,fontSize, paddings,margins,borders, fontWei} from './style/base'


class DetailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 
  render() {
    return (
      <ScrollView>
        <View style={styles.ContentArea}>
        <Text style={styles.detailTitle} >{this.props.news.news[this.props.news.index].title}</Text>
        <Image
          style={styles.detailImage}
          source={{uri: this.props.news.news[this.props.news.index].urlToImage}}
        />
       <Text style={styles.detailDescription}>{this.props.news.news[this.props.news.index].description}</Text>
       <Text style={styles.detailContent}>{this.props.news.news[this.props.news.index].content}</Text>
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  ContentArea: {
    borderColor: colors.black,
    margin: margins.MARGIN_EXTRA_SMALL,
    borderColor: borders.BORDER_COLOR,
    padding: paddings.PADDING_SMALL,
  },
  detailTitle: {
    fontSize: fontSize.FONT_SIZE_LARGE,
    marginBottom:margins.MARGIN_SMALL,
    textAlign:"center",
    fontWeight: fontWei.FONT_BOLD,

  },
  detailDescription: {
    marginVertical: paddings.PADDING_SMALL,
    fontSize: fontSize.FONT_SIZE_MEDIUM,
    fontWeight: fontWei.FONT_BOLD,
  },
  detailContent:{
    fontSize: fontSize.FONT_SIZE_SMALL,
  },
  detailImage:{
    height:200,
    width:"100%"
  }
})

const mapStateToProps = (state) => ({
  news:state.news
})
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsScreen)
