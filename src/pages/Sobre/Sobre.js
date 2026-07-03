import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre(){
    return(
        <View style={styles.container}>
            <View style={styles.containerSobre}>
            <Text style={styles.textoSobre}>Sobre nós: </Text>
            <Text style={styles.textoGeral}>Tudo começou quando o nosso Fundador Alpha percebeu que o mercado de pizzas tradicional tinha zero aura. 
                As outras pizzarias eram todas betinhas, vibes meio flop, sem nenhum tipo de rizz.  
                Foi aí que ele viajou até os confins mais obscuros de Ohio e selou um pacto secreto com o próprio Kai Cenat. 
                O objetivo? Trazer para o Rio de Janeiro a receita da massa mais chigma do multiverso, assada no calor de 10.000 edits do TikTok.  
                Nós não apenas fazemos comida. Nós dropamos gain gastronômico em forma de disco redondo. 
                Cada ingrediente nosso passa pelo teste do mewing antes de ir para o forno. 
                Nossa missão de vida é garantir que você e seu duo tenham o maior pico de dopamina possível sem precisar tocar em um único fio de grama.  
                Se você leu até aqui, sua aura subiu +500 pontos. É a tropa dos Skibidis da 67, tropa do Looksmaxxing da gordura trans! SIGMA SQUAD ONLY!!! 💀🔥🗣️👑</Text>
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

  containerSobre: {
    backgroundColor: 'yellow', 
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },

  textoSobre: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF003F',
    textAlign: 'center',
    marginBottom: 15,
  },

  textoGeral: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  }

});