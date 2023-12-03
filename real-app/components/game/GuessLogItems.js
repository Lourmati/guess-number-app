import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItems;

const styles = StyleSheet.create({
  listItems: {
    borderColor: Colors.PRIMARY800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.ACCENT500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
