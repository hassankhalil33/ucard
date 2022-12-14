import { Dimensions } from "react-native";


const viewPort = {
  vh53: (Dimensions.get('window').height / 10) * 5.3,
  vw60: (Dimensions.get('window').width / 10) * 6,
  vw100: (Dimensions.get('window').width / 10) * 10,
  vh165: (Dimensions.get('window').width / 10) * 16.5,
}

export default viewPort
