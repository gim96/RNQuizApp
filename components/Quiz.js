// components/dashboard.js

import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { RadioButton, DataTable } from "react-native-paper";
import firebase from "./firebase";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,

      count: 0,
      score: 0,
      name: "Next",
      checked: 0,

      myquiz: [
        {
          question: "1. I bought a beautiful dress at the mall.",
          ans1: "preposition",
          ans2: "adjective",
          ans3: "noun",
          ans: "2",
        },
        {
          question: "2. What did she ask you to do?",
          ans1: "conjunction",
          ans2: "preposition",
          ans3: "pronoun",
          ans: "3",
        },
        {
          question: "3. I left my shoes under the kitchen table.",
          ans1: "adjective",
          ans2: "preposition",
          ans3: "pronoun",
          ans: "2",
        },
        {
          question: "4. If we finish our work quickly we can go to the movies",
          ans1: "adverb",
          ans2: "conjunction",
          ans3: "verb",
          ans: "1",
        },
        {
          question: "5. On Saturdays I work from nine to five.",
          ans1: "verb",
          ans2: "preposition",
          ans3: "adverb",
          ans: "1",
        },
        {
          question: "6. I want to go to a university in the United States.",
          ans1: "adjective",
          ans2: "preposition",
          ans3: "noun",
          ans: "3",
        },
        {
          question: "7. I'm sure I've met your girlfriend before.",
          ans1: "verb",
          ans2: "preposition",
          ans3: "interjection",
          ans: "1",
        },
        {
          question: "8. Well, I don't think I'll be home before",
          ans1: "interjection",
          ans2: "preposition",
          ans3: "pronoun",
          ans: "1",
        },
        {
          question: "9. Andy knocked on the door but nobody answered.",
          ans1: "adverb",
          ans2: "adjective",
          ans3: "conjunction",
          ans: "3",
        },
        {
          question: "10. After lunch let's go out for a coffee.",
          ans1: "pronoun",
          ans2: "preposition",
          ans3: "verb",
          ans: "2",
        },
      ],
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  quizCount = () => {
    if (this.state.checked != 0) {
      if (this.state.count < 9) {
        if (this.state.checked == this.state.myquiz[this.state.count].ans) {
          this.setState({ score: this.state.score + 1 });
        }
        if (this.state.count == 8) {
          this.setState({ name: "Submit" });
        }
        this.setState({
          count: this.state.count + 1,
          checked: 0,
        });
      } else {
        alert("You got " + " " + this.state.score + "/10");
      }
    }
  };

  quizReset = () => {
    if (this.state.count == 9) {
      this.setState({
        count: 0,
        score: 0,
        checked: 0,
        name: "Next",
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.btnHead} onPress={this.quizCount}>
            <Text style={{ color: "white" }}>
              Hello, {this.state.displayName}
            </Text>
          </TouchableOpacity>
          <Button
            color="#6E5DA3"
            title="Logout"
            onPress={() => this.signOut()}
          />
        </View>
        <Text></Text>
        <TouchableOpacity style={styles.ansButton}>
          <Text style={styles.txtquiz}>
            {this.state.myquiz[this.state.count].question}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.middleBtn}
          onPress={() => this.setState({ checked: 1 })}
        >
          <Text style={styles.txtAns}></Text>
          <RadioButton
            value={1}
            status={this.state.checked === 1 ? "checked" : "unchecked"}
            onPress={() => this.setState({ checked: 1 })}
          />
          <Text style={styles.txtAns}>
            {this.state.myquiz[this.state.count].ans1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.middleBtn}
          onPress={() => this.setState({ checked: 2 })}
        >
          <RadioButton
            value={2}
            status={this.state.checked === 2 ? "checked" : "unchecked"}
            onPress={() => this.setState({ checked: 2 })}
          />
          <Text style={styles.txtAns}>
            {this.state.myquiz[this.state.count].ans2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.middleBtn}
          onPress={() => this.setState({ checked: 3 })}
        >
          <RadioButton
            value={3}
            status={this.state.checked === 3 ? "checked" : "unchecked"}
            onPress={() => this.setState({ checked: 3 })}
          />
          <Text style={styles.txtAns}>
            {this.state.myquiz[this.state.count].ans3}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.quizCount}>
          <Text style={styles.txtNext}>{this.state.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.quizReset}>
          <Text style={styles.txtNext}>Try</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },

  title: {
    alignSelf: "center",
    paddingTop: "15%",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    backgroundColor: "white",
  },
  middleBtn: {
    width: "100%",
    height: "7%",
    backgroundColor: "white",
    borderColor: "#1E84D0",
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
  },
  ansButton: {
    width: "100%",
    height: "15%",
    backgroundColor: "#6E5DA3",
    borderColor: "#1E84D0",
    borderRadius: 5,
    borderWidth: 2,
    paddingTop: "5%",
  },
  txtAns: {
    textAlign: "center",
    fontSize: 20,
  },
  txtquiz: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  txtNext: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  btn: {
    width: "100%",
    height: "6%",
    alignSelf: "center",
    backgroundColor: "#6E5DA3",
    borderColor: "#1E84D0",
    borderRadius: 5,
    borderWidth: 1,
  },
  btnHead: {
    width: "78%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "#6E5DA3",
    borderColor: "#1E84D0",
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: "2%",
    alignItems: "center",
  },
});
