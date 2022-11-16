import { Dimensions } from "react-native";


const viewPort = {
  vh53: (Dimensions.get('window').height / 10) * 5.3,
  vw60: (Dimensions.get('window').width / 10) * 6,
  vw100: (Dimensions.get('window').width / 10) * 10,
}

export default viewPort
