import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import firebase from "./firebase";
// import firestore from "@react-native-firebase/firestore";

export default class Test extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   person: [
    //     {
    //       correct: "",
    //       ans1: "",
    //       ans2: "",
    //       ans3: "",
    //       question: "",
    //     },
    //   ],
    // };
    this.state = {
      person: [],
      isLoading: true,
    };
  }

  //   async componentDidMount() {

  //     firebase
  //       .firestore()
  //       .collection("tasks")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           //   console.log(`${doc.id} => ${doc.data()}`);
  //           //   console.log(doc.data());
  //           this.setState({
  //             person: [
  //               {
  //                 correct: doc.data().ans,
  //                 ans1: doc.data().ans,
  //                 ans2: doc.data().ans,
  //                 ans3: doc.data().ans,
  //                 question: doc.data().ans,
  //               },
  //             ],
  //           });
  //         });
  //       });
  //   }

  async componentDidMount() {
    const db = firebase.firestore();

    db.collection("tasks")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());

        this.setState({ person: data, isLoading: false });
      });
  }

  render() {
    // console.log(this.state.person);
    if (this.state.isLoading == true) {
      return <Text>Loading.....</Text>;
    } else {
      return <Text>{this.state.person[0].ans}</Text>;
    }

    return (
      <View>
        <Text>hey</Text>
        <Text>hey</Text>

        {/* <Text>{this.state.person.ans}</Text> */}
      </View>
    );
  }
}
