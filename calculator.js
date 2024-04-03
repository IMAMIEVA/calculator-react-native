import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState(null);

    const handleNumberPress = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorPress = (op) => {
        setOperator(op);
        setFirstValue(parseFloat(displayValue));
        setDisplayValue('0');
    };

    const handleEqualsPress = () => {
        const secondValue = parseFloat(displayValue);
        let result;
        switch (operator) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
            default:
                return;
        }
        setDisplayValue(result.toString());
        setFirstValue(result);
    };

    const handleReverse = () => {
        const Value = -parseFloat(displayValue);
        setDisplayValue(Value.toString());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.display}>{displayValue}</Text>

            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#D3D3D3' }]} onPress={() => setDisplayValue('0')}>
                    <Text style={[styles.buttonText, { color: 'black' }]}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#D3D3D3' }]} onPress={() => handleReverse()}>
                    <Text style={[styles.buttonText, { color: 'black' }]}>±</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#D3D3D3' }]} onPress={() => setDisplayValue('0')}>
                    <Text style={[styles.buttonText, { color: 'black' }]}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => handleOperatorPress('/')}>
                    <Text style={styles.buttonText}>÷</Text>
                </TouchableOpacity>
            </View>
            

            <View style={styles.row}>

                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => handleOperatorPress('*')}>
                    <Text style={styles.buttonText}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => handleOperatorPress('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => handleOperatorPress('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            
                <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress= {() => handleNumberPress(',')} >
                    <Text style={styles.buttonText}>,</Text>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={handleEqualsPress}>
                    <Text style={styles.buttonText}>=</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
    },
    display: {
        fontSize: 40,
        textAlign: 'right',
        padding: 10,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
});

// export default Calculator;
