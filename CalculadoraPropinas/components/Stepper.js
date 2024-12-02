import { Pressable, StyleSheet, View } from "react-native";
import { TextButton } from "./TextButton";

export function Stepper( props ) {

    const defaultMinValue = 0;
    const defaultMaxValue = 100;
    const defaultIncremento = 1;
    const defaultValue = defaultMinValue;

    const minValue = props.minValue === null || props.minValue === undefined
        ? defaultValue 
        : parseFloat(props.minValue);
    const maxValue = props.maxValue === null || props.maxValue === undefined
        ? defaultMaxValue
        : parseFloat(props.maxValue);
    const incremento = props.incremento === null || props.incremento === undefined
        ? defaultIncremento
        : parseFloat(props.incremento);
    let value = props.value === null || props.value === undefined
        ? defaultValue
        : parseFloat(props.value);

    function onDecrementButtonTapped() {
        if (value - incremento < minValue) {
            return;
        }
        value = value - incremento;
        if (props.onChange === null || props.onChange === undefined) {
            return;
        }
        props.onChange(value)
    }

    function onIncrementButtonTapped() {
        if (value + incremento > maxValue) {
            return;
        }
        if (props.onChange === null || props.onChange === undefined) {
            return;
        }
        value += incremento;
        props.onChange(value)
    }

    return(
        <View style={styles.containerBottons}>
            <TextButton title='-'
            buttonStyle={styles.minusButtonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={onDecrementButtonTapped}/>
            <TextButton title='+'
            buttonStyle={styles.plusButtonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={onIncrementButtonTapped}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBottons:{
        // justifyContent:'flex-end',
        flexDirection: 'row',
        // borderWidth: 1,
        gap: 5,
    },

    plusButtonStyle: {
        borderColor: 'gray',
        backgroundColor: 'gray',
        minWidth: 36,
        minHeight: 36,
        justifyContent: 'center'
        // alignItems: 'center',
    },

    minusButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        // gap: 5,
        borderColor: 'black',
        backgroundColor: 'lightwhite',
        minWidth: 36,
        minHeight: 36,
        // alignItems: 'center',
    },

    buttonTextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    }
})