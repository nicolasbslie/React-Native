import { Pressable, Text, StyleSheet } from 'react-native'

// Define quais informações (props) o componente recebe
type Props = {
    title: string // Texto que aparecerá dentro do botão
    onPress: () => void // Função executada quando o botão for clicado
}

/*
Aqui vamos criar um botão reutilizável.
Assim evitamos repetir código em várias telas.
*/
export default function CustomButton({ title, onPress }: Props) {

    // Cria o componente CustomButton
    // Recebe title e onPress através das props
    return (
        // Tudo dentro do return aparece na tela (é renderizado)
        <Pressable

            /*
            style recebe uma função.
            O React Native informa se o botão está sendo pressionado.
            Se estiver pressionado, aplica também o estilo buttonPressed.
            */
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}

            // Executa a função recebida quando o botão for clicado
            onPress={onPress}
        >

            {/* Texto exibido dentro do botão */}
            <Text style={styles.text}>
                {title} {/* Mostra o texto recebido */}
            </Text>

        </Pressable>
    )
}

// Estilização
const styles = StyleSheet.create({

    // Estilo principal do botão
    button: {

        width: '100%', // Ocupa toda a largura disponível

        backgroundColor: '#1fa463', // Verde principal da paleta EcoSpending

        paddingVertical: 14, // Espaçamento interno vertical

        borderRadius: 12, // Arredonda os cantos

        alignItems: 'center', // Centraliza o texto horizontalmente

        marginTop: 12, // Espaçamento acima do botão

        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0, // Sem deslocamento horizontal
            height: 4 // Deslocamento vertical
        },
        shadowOpacity: 0.2, // Transparência da sombra
        shadowRadius: 4, // Suavidade da sombra

        // Sombra para Android
        elevation: 5
    },

    /*
    Estilo aplicado apenas enquanto o usuário
    mantém o dedo pressionado sobre o botão.
    */
    buttonPressed: {
        backgroundColor: '#0f3d1e' // Verde escuro da paleta
    },

    // Estilo do texto do botão
    text: {
        color: '#ffffff', // Cor branca

        fontSize: 16, // Tamanho da fonte

        fontWeight: '600' // Deixa a fonte seminegrito
    }
})