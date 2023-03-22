import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView, FlatList } from 'react-native';
import GoalItems from "./components/listItem";
import GoalInput from "./components/GoalInput";
export default function App() {

  
  const[goals,setGoals]=useState([]);
  const[isAddMode, setIsAddMode]= useState(false);

  

  // const addGoalHandler=()=>{
  //   setGoals(currentGoals =>[...currentGoals,enteredGoal]);
  // };

  //for flatlist
  const addGoalHandler=goalTitle=>{
       setGoals(currentGoals =>[...currentGoals,
      {id:Math.random().toString(), value:goalTitle} ]);
      setIsAddMode(false);
     };

  const removeGoalHandler=goalId =>{
    setGoals(currentGoals =>{
      return currentGoals.filter( goal => goal.id !== goalId);
    });
  };
     
const cancelGoalHandler=() =>{
  setIsAddMode(false);
};

  return (
    <View style={styles.screen}>
    <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
    <GoalInput
     visible={isAddMode}
     onAddGoal={addGoalHandler}
     onCancel={cancelGoalHandler}
    />


      
      {/* <ScrollView>
      {goals.map((goal) =>
        <View  key={goal} style={styles.listItem}><Text> {goal} </Text></View>
      )}
      </ScrollView> */}

    <FlatList
    // keyExtractor={(item, index) => item.id}
    data={goals}
    renderItem={itemData =>(
      <GoalItems
      id={itemData.item.id}
      title={itemData.item.value}
      onDelete={removeGoalHandler}
       /> 
    )}
    />

    </View>
  );
}

const styles=StyleSheet.create({
  screen:{
    padding: 50
  }
  
});