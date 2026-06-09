import { View, Text, StyleSheet, Image } from 'react-native'
import CustomButton from '@/components/ui/Button'
import { router } from 'expo-router'

// Cores do projeto
const COLORS = {
  greenDark: '#0f3d1e',
  greenMain: '#1fa463',
  greenLight: '#7ed957',
  background: '#f2f5f3',
  white: '#ffffff',
}

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logoPi.png')}
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.title}>EcoSpending</Text>

      <Text style={styles.subtitle}>
        O EcoSpending é o seu parceiro inteligente para organizar finanças.
        Ele ajuda a calcular seus gastos mensais, oferecendo uma visão clara
        do seu fluxo de dinheiro.
      </Text>

      <CustomButton
        title='Login'
        onPress={() => router.push('/login')}
      />

      <CustomButton
        title='Cadastro'
        onPress={() => router.push('/register')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  image: {
    width: 220,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.greenDark,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.greenMain,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
})