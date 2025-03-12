import {StyleSheet} from 'react-native';

const Styles=StyleSheet.create({

    topBar:{
    position: 'absolute',
    top: 0.1,
    left: 0,
    right: 0,
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', 
    },

    topBarText:{
        color: 'white', textAlign: 'center', fontSize:30,fontWeight:'bold'
    },

    buttonsAlignment:{
        flex: 0.1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'white'
    }
});
    export default Styles;