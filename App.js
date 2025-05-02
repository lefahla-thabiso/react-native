import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";

const logoImg = require("./assets/splash-icon.png"); //take pictre locally

export default function App() {
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      <Button
        title="PRESS"
        onPress={() => console.log("PRESSED")}
        color="red"
      ></Button>
    </View>
  );
}
