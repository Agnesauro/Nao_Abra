import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Picker } from 'react-native-web';

export default function ComponentPicker(){
    const [sabor, setSabor] = useState('')

    return(
        <View style ={styles.container}>
            <View style={styles.layout}>
            <Image
            source={require('../../assets/pizza67.png')} 
            style={{ width: 350, height: 400, resizeMode: 'contain' }}
            />
            <Text>Menu de Pizzas</Text>
            <Picker
                selectedValue={sabor}
                onValueChange={(itemValue, itemIndex) => setSabor(itemValue)}
            >
                <Picker.Item key={1} value='calabresa' label='Pizza de Calabresa'/>
                <Picker.Item key={2} value='portuguesa' label='Pizza Portuguesa'/>
                <Picker.Item key={3} value='bacon' label='Pizza de Bacon'/>
                <Picker.Item key={4} value='frango_catupiry' label='Pizza de Frango com Catupiry'/>
                <Picker.Item key={5} value='alho' label='Pizza de Alho'/>
                <Picker.Item key={6} value='mussarela' label='Pizza de Mussarela'/>
                <Picker.Item key={7} value='camarao' label='Pizza de Camarão'/>
                <Picker.Item key={8} value='marguerita' label='Pizza de Marguerita'/>
            </Picker>

            <Text>
            {sabor === '' ? 'Nenhum sabor selecionado'
            : `Sabor escolhido:  ${sabor}`}
            </Text>
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    layout: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
})