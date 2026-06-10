import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Image
            source={require('../../assets/images/logoPi.png')}
            style={styles.image}
            resizeMode='contain'
        />
      </View>

      {/* Parte inferior branca */}
      <View style={styles.bottomSection}>

        <Text style={styles.title}>
          Registre-se
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  topSection: {
    flex: 1.5,
    backgroundColor: '#4CAF50', 
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },

  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },

  description: {
    fontSize: 14,
    color: '#888',
    lineHeight: 22,
    marginBottom: 40,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  buttonText: {
    color: '#999',
    marginRight: 10,
    fontSize: 14,
  },

    image: {
    width: 220,
    height: 200,
    marginBottom: 20,
  },
});