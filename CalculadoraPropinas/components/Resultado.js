import { StyleSheet, Text, View } from 'react-native';


export default function Resultado( props ) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.resultTextStyle}>{props.descripcion}</Text>
            <Text style={[styles.resultTextStyle, styles.valorStyle]}>{props.valor}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    resultTextStyle: {
        fontSize: 20,
    },

    valorStyle: {
        // alignContent: 'flex-end',
    },
});