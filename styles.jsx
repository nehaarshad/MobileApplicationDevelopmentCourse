import React, {StyleSheet} from 'react-native';

const Styles=StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      //  flexDirection:'row'
      },
      container: {
        flex: 0.09,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       flexDirection:'column'
      },
 headingText:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
 },
 rowViewStyle:{
    flex:0.75,
    flexDirection:'row',
    height:20
},
textField:{
    borderColor:'black',
    borderWidth:1,
    padding:10,
    width:200,
   left:1
}

});

export default Styles;