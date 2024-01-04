import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { textStyles } from "../../constants/textStyles";
import { Text, useThemeColor } from "../themed";

interface Props {
  children: React.ReactNode;
  snapPoints?: string[];
  buttonText?: string;
  buttonPlaceholder: string;
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModal | null>;
}

export default function BottomSheetWrapper({
  children,
  buttonText,
  buttonPlaceholder,
  bottomSheetModalRef,
}: Props): JSX.Element {
  const snapPoints = useMemo(() => ["50%"], []);

  const { grey3, text } = useThemeColor();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <Text
          style={[
            textStyles.m,
            { color: buttonText !== undefined ? text : grey3 },
          ]}
        >
          {buttonText ?? buttonPlaceholder}
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
      >
        <View style={styles.modalContainer}>{children}</View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 14,
    paddingTop: 0,
    zIndex: 100,
    backgroundColor: "white",
  },
});
