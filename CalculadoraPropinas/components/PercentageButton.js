import { TextButton } from "./TextButton";
import { StyleSheet, View } from "react-native";

export default function PercentageButton(props) {
    return(
        <View>
            <TextButton title={props.percentage + '%'}
            buttonStyle={styles.percentageButtonStyle}
            onPress={() => props.onTap(props.percentage)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    percentageButtonStyle: {
      minWidth: 70,
      alignItems: 'center',
    },
  
  });