import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '000',
      padding: 20,
      marginTop: 20,
      flexDirection: 'column',
      columnGap: 0,
      
    },
    

    first_container:{
        backgroundColor: '#2980b9',
       
        borderRadiusR: 20,
        flexWidth: 1,
        height: 250,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        marginBottom: 30,
        paddingTop: 100
    },
    first_text:{
        textAlign: "left",
        fontSize: 30,
        marginLeft: 10,
        

    },
    firs2_text:{
        textAlign: "left",
        fontSize: 20,
        marginLeft: 10,
        

    },
    second_text:{
        fontWeight: "bold",
        fontSize: 20,
    },
    second_container:{
        flexWidth: 1,
        padding: 5,
        marginBottom:20,
        paddingTop: 10,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#ecf0f1',
        flexDirection: 'row',
        rowGap: 20,
        columnGap: 20,
        alignContent: "flex-start"
        
        

    },
    third_container:{
        
        textAlign: "left",
        marginBottom: 10,
        
        
    },
    fourth:{
        flexDirection: "column",
        columnGap: 20,
    },
    my_Subject:{
        fontSize: 20,
        marginBottom: 10
    },
    subsss:{
        padding: 5
    },
   fourth_text:{
    color: 'blue',
    textAlign: 'right',
    fontSize: 18
   },
    
  
   
  
  });
  