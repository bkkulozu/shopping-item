import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  clickEventListener() {
    Alert.alert("Chosen product", "Product has beed added to cart")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:28}}>
            <Image style={styles.productImg} source={{uri:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/XiaomiMi8Pro.jpg"}}/>
            <Text style={styles.name}>Xiaomi Mi 8 </Text>
            <Text style={styles.price}>$ 219</Text>
            <Text style={styles.description}>
            Xiaomi Redmi Note 8 (64GB, 4GB) 6.3" Display, Snapdragon 665, 48MP Quad Camera, Dual SIM GSM Factory Unlocked - US & Global 4G LTE
            </Text>
          </View>
         
          <View style={styles.contentColors}>
          <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#F73236"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#B1EAFD"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#04010D"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#02427F"}]}></TouchableOpacity> 
          </View>
          <View style={styles.contentSize}>
            <TouchableOpacity style={styles.btnType}><Text>Mi </Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnType}><Text>Mi + </Text></TouchableOpacity> 
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}> 🛒 Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:'#1A0F35',
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  btnColor: {
    marginTop:10,
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnType: {
    marginTop:16,
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#28B7E7",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginTop:8,
    marginHorizontal:35
  }
});    