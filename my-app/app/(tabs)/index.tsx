//Importando o que precisamos para construir a tela
import {View, Text, StyleSheet, Image} from 'react-native'
// Importando o botão que criamos
import CustomButton from '@/components/ui/Button'
import {router} from 'expo-router'
/**
 * Essa é a primeira tela do app.
 * Ela mostra uma imagem e dois botões:
 * - Ir para login
 * - Ir para Cadastro
 */

export default function IndexScreen(){
  return(
    <View style = {styles.container}>
      <Image source={require('../../assets/images/logoPi.png')}
      style={styles.image}
      resizeMode='contain'
      />
      <Text style={styles.title}>EcoSpending</Text>
      <Text style={styles.subtitle}>O EcoSpending é o seu parceiro inteligente para organizarfinanças. Ele ajuda a calcular seus gastos mensais, oferecendo uma visão clara do seu fluxo de dinheiro.</Text>
      {/* Botão 1 */}
      <CustomButton
      title='Login'
      onPress={() => router.push('/login')}/>
      {/* Botão 2 */}
      <CustomButton
      title='Cadastro'
      onPress={() => router.push('/register')}/>
    </View>
  )
}

//Estilizando
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f9e0aff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  image: {
    width: 220,
    height: 200,
    marginBottom: 20
  }, 

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8
  },

  subtitle: {
    fontSize: 16,
    color: '#000000ff',
    marginBottom: 24,
    textAlign: 'center'
  }
})