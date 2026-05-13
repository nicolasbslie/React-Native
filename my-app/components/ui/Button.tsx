import {Pressable, Text, StyleSheet} from 'react-native'

type Props = {
    title: string //Texto que aparece
    onPress: () => void //Função executada ao clicar
}

/*Aqui vamos criar um botão reutilizável.
Assim evitamos repetir código várias telas
*/
export default function CustomButton({title, onPress}: Props){
    //Cria o componente CustomButton
    //Recebe title e onPress através dos props
    return(
        //Tudo dentro do return aparece na tela (é renderizado)
        <Pressable
        style = {styles.button} //Aplica os estilos do botão
        onPress={onPress} //Executa a função ao clicar
        >
            <Text style = {styles.text}>
                {title} {/*Mostra o texto recebido */}
            </Text>
        </Pressable>
    )
}

//Estilização
const styles = StyleSheet.create({
    //Cria os estilos organizados
    button: {
        width: '100%', //Ocupa toda a largura disponível
        backgroundColor: '#0c8b12ff', //cor azul do Grêmio
        paddingVertical: 14, //Espaçamento interno
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 12
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
})