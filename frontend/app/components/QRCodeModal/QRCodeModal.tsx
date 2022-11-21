import React, { FC } from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import colors from "../../constants/pallete";
import styles from "./styles";


interface QRCodeModalProps {
  visibility: boolean;
  cardId: string;
  logo: any;
  onCancel: Function;
}

const QRCodeModal: FC<QRCodeModalProps> = (props) => {
  const { visibility, cardId, logo, onCancel } = props;

  return (
    <Modal visible={visibility}>
      <View style={styles().modal}>
        <QRCode
          value={cardId}
          logo={logo}
          size={200}
        />
        <TouchableOpacity
          style={styles().cancelButton}
          onPress={() => onCancel()}
        >
          <Text style={{ color: colors.white }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default QRCodeModal
