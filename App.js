import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";

const logoImg = require("./assets/splash-icon.png"); //take pictre locally

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      <Button
        title="PRESS"
        onPress={() => setIsModalVisible(true)}
        color="grey"
      ></Button>
      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        >
        <View style={{ padding: 60, flex: 1, backgroundColor: "lightblue" }}>
          <Text>Modal Content</Text>
          <Button
            title="PRESS"
            onPress={() => setIsModalVisible(false)}
            color="midnightblue"
          ></Button>
        </View>
      </Modal>
    </View>
  );
}
