import React, {useState} from "react";
import { View,Text, StyleSheet,Image, TextInput} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from '../../services/api';

// Tela de login da aplicação, onde o usuario deve informar 
// o numero do seu processo e a senha para pode acessa-lo

const Login = () => {
    
    const [processo, setProcesso] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    // acessa a tela de detalhes, onde tem os dados do processo 
    // essa função envia o id do processo para a tela de detalhe
    // onde será tratado e retornara os dados do usuario
    // e os dados de seu processo
    async function handleNavigationToDetalhe(){
        await api.get('processo',
            { params:{
                nprocesso: processo, 
                psenha: senha
            } 
            }).then(response => {
                 if(response.data === 'erro'){
                     alert('N° do processo ou senha incorretos')
                 } else{
                     navigation.navigate('Detalhe', response.data)
                 }
              }).catch(error => {console.log(error)});
        
    }

    return (
        <View style={styles.main}>

            <View style={{flex: 0.3}}>
                <Image style={styles.pointImage} source= {require('../../img/marcaTJPR-menor.png')} />
            </View>

            <View style={styles.fildLogin}>
                <TextInput style={styles.input} placeholder="N° do processo" value={processo} onChangeText={setProcesso} ></TextInput>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={setSenha} ></TextInput>
                <RectButton style={styles.button} onPress={handleNavigationToDetalhe}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    //style do View principal
    main:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#123141'
    },
    //style do View onde estão os campos para login
    fildLogin:{
        //flex:0.3,
        marginTop: 35,
        width: '85%',
        height: 200,
        backgroundColor: '#E2E2E2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: '5%'
    },
    //style da imagem do tjpr
    pointImage: {
        paddingBottom: 2

    },
    //style dos input's
    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 30,
        fontSize: 16,
        textAlign: "left",
    },
    //style do botão para login
    button: {
        
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
    //style do texto do botão
    buttonText: {
        margin: 8,
        color: '#000',
        fontSize: 16
    },
});

export default Login;