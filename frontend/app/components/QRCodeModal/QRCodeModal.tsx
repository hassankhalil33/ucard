import React from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import colors from "../../constants/pallete";
import styles from "./styles";


const QRCodeComponent = (props) => {
  const { openModal, cardId, appLogo, onPress } = props;

  return (
    <Modal visible={openModal}>
      <View style={styles().modal}>
        <QRCode
          value={cardId}
          logo={appLogo}
          size={200}
        />
        <TouchableOpacity
          style={styles().cancelButton}
          onPress={() => onPress()}
        >
          <Text style={{ color: colors.white }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default QRCodeComponent
