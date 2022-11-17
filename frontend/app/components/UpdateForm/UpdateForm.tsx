import React, { FC } from "react";
import { View } from "react-native";
import { TextInput } from "@react-native-material/core";
import colors from "../../constants/pallete";


interface UpdateFormProps {
  content: {
    cardName: string;
    cardProf: string;
    cardEmail: string;
    cardLink: string;
    cardLocation: string;
    setCardName: Function;
    setCardProf: Function;
    setCardEmail: Function;
    setCardLink: Function;
    setCardLocation: Function;
  };
}

const UpdateForm: FC<UpdateFormProps> = ({ content }) => {
  return (
    <View>
      <TextInput
        style={{ marginBottom: 10 }}
        color={colors.blue}
        inputStyle={{ color: colors.primary }}
        variant="outlined"
        label={"Name"}
        value={content.cardName}
        onChangeText={(text) => content.setCardName(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        color={colors.blue}
        inputStyle={{ color: colors.primary }}
        variant="outlined"
        label={"Profession"}
        value={content.cardProf}
        onChangeText={(text) => content.setCardProf(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        color={colors.blue}
        inputStyle={{ color: colors.primary }}
        variant="outlined"
        label={"Email"}
        value={content.cardEmail}
        onChangeText={(text) => content.setCardEmail(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        color={colors.blue}
        inputStyle={{ color: colors.primary }}
        variant="outlined"
        label={"Link"}
        value={content.cardLink}
        onChangeText={(text) => content.setCardLink(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        color={colors.blue}
        inputStyle={{ color: colors.primary }}
        variant="outlined"
        label={"Location"}
        value={content.cardLocation}
        onChangeText={(text) => content.setCardLocation(text)}
      />
    </View>
  )
}

export default UpdateForm
