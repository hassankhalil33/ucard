import React, { useRef, FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
const arrowUp = require("../../assets/arrows/arrow-up.png");
const arrowDown = require("../../assets/arrows/arrow-down.png");

interface ModalComponentProps {
  title?: string,
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Image source={arrowUp} />
      </TouchableOpacity>

      <Modalize ref={modalizeRef}>I'm the Modalize</Modalize>
    </>
  );
};

export default ModalComponent
