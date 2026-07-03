import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.home}>
              <Image
               source={require('../../../assets/sigma.png')}
              style={styles.imagemHome}
/>
                
                <Text style={styles.textoHome}>ATENÇÃO SKIBIDIS CHIGMAS DE RIO DE JANEIRO!! 🔥🍕</Text>
                
                <Text style={styles.textoIntro}>
                    Você acabou de spawnar no app mais RIZZ de toda a internet. 
                    Se você tem mais de 200 de QI de aura, já sabe que a nossa pizza é cozinhada diretamente em Ohio pelo próprio Baby Gronk.   
                    Não seja um betinha cuck do IFood. 
                    Peça agora a sua pizza 67 e venha fazer o Mewing gastronômico mais insano da sua vida com a nossa borda recheada que vai derreter o seu cérebro de vez.   
                    Aviso: Contém 100% de taxa de imposto do Fanum se você dividir com o seu duo. GRIMACE SHAKE INCLUÍDO NO COMBO!! GYATT!!! 💀🔥🗣️
                </Text>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.textoBotao}>Nossa Aura (Sobre)</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pedidos')}>
                    <Text style={styles.textoBotao}>Resgatar Gain (Pedidos)</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    backgroundColor: 'yellow', 
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  textoHome: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF003F',
    textAlign: 'center',
    marginBottom: 15,
  },
  textoIntro: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  botao: {
    backgroundColor: '#FF003F',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  imagemHome: {
    width: 250, 
    height: 250, 
    resizeMode: 'contain',
    marginBottom: 0, 
  }
});