import React, { useState, FC } from "react";
import { StyleSheet, Dimensions, Text, TouchableOpacity, View } from "react-native";
import colors from "../../constants/pallete";
import { useFonts } from 'expo-font';

interface InputFieldProps {
  placeholder: string,
}

