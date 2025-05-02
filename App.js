import { Text, View, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/splash-icon.png"); //take pictre locally

export default function App() {
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      {/* <Text style={{ backgroundColor: "grey" }}>One</Text>
      <Image style={{ height: 300, width: 250 }} source={logoImg}></Image>
      <Image
        style={{ height: 30, width: 25 }}
        source={{ uri: "https://picsum.com/photos/300" }}
      ></Image> */}
      <ImageBackground style={{ flex: 1, }} source={logoImg}>
        <Text >TEXT HERE </Text>
      </ImageBackground>
    </View>
  );
}
