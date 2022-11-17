import React, { FC } from "react";
import { View } from "react-native";
import { TextInput } from "@react-native-material/core";
import SelectDropdown from "react-native-select-dropdown";
import colors from "../../constants/pallete";
import styles from "./styles";


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
      <SelectDropdown
        data={["Personal", "Business", "Gaminig", "Other"]}
        onSelect={(selectedItem) => console.log(selectedItem)}
        defaultButtonText={"Type"}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        buttonStyle={styles().field}
        buttonTextStyle={{ fontSize: 16 }}
      />
      <SelectDropdown
        data={["Public Card", "Private Card"]}
        onSelect={(selectedItem) => console.log(selectedItem)}
        defaultButtonText={"Type"}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        buttonStyle={styles().field}
        buttonTextStyle={{ fontSize: 16 }}
      />
    </View>
  )
}

export default UpdateForm
