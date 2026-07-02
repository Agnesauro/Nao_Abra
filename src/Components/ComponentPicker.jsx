import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from 'react-native-web';

export default function ComponentPicker(){
    const imagensPizza = {
        calabresa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/4ef71e576dd2c48bc6f075632240504b.webp?itok=GJauJyaW',
        portuguesa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/2eb7ece4ae9a67b773aa138589e2031d.webp?itok=8rB5qKP-',
        bacon: 'https://www.seara.com.br/wp-content/uploads/2025/09/R0325-SL-pizza-de-bacon-fatiado-cebola-caramelizada-1200x675-1.webp',
        frango_catupiry: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/85edcfdb1dae604c2627a88c06fa0c85.webp?itok=GL3lIKtV',
        alho: 'https://mrteddypizza.com.br/wp-content/uploads/2024/03/Design-sem-nome-2024-03-21T014935.418.png',
        mussarela: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/fe1087b2f7b47b6a5bc8ad8269601a97.webp?itok=olj7rz2i',
        camarao: 'https://www.sabornamesa.com.br/media/k2/items/cache/08a4cf1e44f783c853b207a033a173b9_XL.webp',
        marguerita: 'https://s2-receitas.glbimg.com/BmkjA0L1Z3ciNldyhh8gYxrT_MQ=/1366x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/i/t/M0NAabSCKba8nzZy6wzw/pizza-margherita-receita.jpg'
    }

    const [sabor, setSabor] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                
                {/* Logo da Pizzaria */}
                <Image
                    source={require('../../assets/pizza67.png')} 
                    style={styles.logoPizzaria}
                />
                
                <Text style={styles.textoMenu}>Menu de Pizzas</Text>
                
                {/* Picker */}
                <Picker
                    selectedValue={sabor}
                    onValueChange={(itemValue) => setSabor(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item key={1} value='' label='Selecione um sabor...'/>
                    <Picker.Item key={2} value='calabresa' label='Pizza de Calabresa'/>
                    <Picker.Item key={3} value='portuguesa' label='Pizza Portuguesa'/>
                    <Picker.Item key={4} value='bacon' label='Pizza de Bacon'/>
                    <Picker.Item key={5} value='frango_catupiry' label='Pizza de Frango com Catupiry'/>
                    <Picker.Item key={6} value='alho' label='Pizza de Alho'/>
                    <Picker.Item key={7} value='mussarela' label='Pizza de Mussarela'/>
                    <Picker.Item key={8} value='camarao' label='Pizza de Camarão'/>
                    <Picker.Item key={9} value='marguerita' label='Pizza de Marguerita'/>
                </Picker>

                <Text style={styles.textoSabor}>
                    {sabor === '' ? 'Nenhum sabor selecionado' : `Sabor escolhido: ${sabor}`}
                </Text>
                
                
                {sabor !== '' && (
                    <Image
                        source={{ uri: imagensPizza[sabor] }}
                        style={styles.imagemPizzaSelecionada}
                    />
                )}
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 15,
        width: '90%',
        maxWidth: 400,
        overflow: 'hidden', 
        borderWidth: 1,
        borderColor: '#e0e000', 
    },
    logoPizzaria: {
        width: 250, 
        height: 250, 
        resizeMode: 'contain',
        marginBottom: 0, 
    },
    textoMenu: {
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -10, 
        marginBottom: 10,
    },
    picker: {
        width: '100%',
        height: 40,
        marginBottom: 10,
    },
    textoSabor: {
        fontSize: 14, 
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
    },
    imagemPizzaSelecionada: {
        width: 180, 
        height: 180, 
        resizeMode: 'cover',
       
        borderRadius: 90, 
        marginTop: 5,
        borderWidth: 3,
        borderColor: '#fff', 
    }
});