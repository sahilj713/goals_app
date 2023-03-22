import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,Modal} from 'react-native';

const GoalInput=props =>{
    const[enteredGoal,setEnteredGoal]=useState('');
  
    const goalInputHandler=(enteredText)=>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler=() =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return(
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.input_button} >
        <TextInput 
          placeholder="Your Goal"
          style={styles.input_container}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} /> */}
        <View style={styles.button_container}>
        <View style={styles.button}>
        <Button title="CANCEL" color="red" onPress={props.onCancel} /> 
        </View>
        <View style={styles.button}>
        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
        <Button title="ADD" onPress={ addGoalHandler} /> 
        </View>
        </View>

      </View>
      </Modal>
    );

};

const styles=StyleSheet.create({
    input_button:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      input_container:{ 
        width:'80%' ,
        borderBottomColor:"black",
        borderBottomWidth:1,
        padding: 10,
        marginBottom: 10  
      },
      button_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%'
      },
      button:{
        width:'50%'
      
      }

    });

 export default GoalInput;   