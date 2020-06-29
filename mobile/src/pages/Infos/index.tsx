import React, {useEffect, useState} from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from '@expo/vector-icons'; 
import {useNavigation, useRoute} from '@react-navigation/native'

interface Params{
    id_info: number;
}

const Info = () => {

    const [informacao, setInformacao] = useState('');
    const route = useRoute();
    const routeParams = route.params as Params;

    useEffect(() => {
        if (routeParams.id_info === 1) {
            setInformacao('Aqui ele receberá uma informação')
        }
        if (routeParams.id_info === 2) {
            setInformacao('Desconto de parte do tempo da pena total pelo trabalho ou estudo realizado.')
        }
        if (routeParams.id_info === 3) {
            setInformacao('Período de pena já cumprido pelo reeducando, considerando as remições.')
        }
        if (routeParams.id_info === 4) {
            setInformacao('Tempo de pena que falta cumprir para encerrar a Execução.')
        }
        if (routeParams.id_info === 5) {
            setInformacao('Data inicial e previsão da data final do cumprimento da pena.')
        }
        if (routeParams.id_info === 6) {
            setInformacao(
            'Benefícios: Pena Restritiva de Direitos; Suspensão Condicional da Pena ou; Livramento Condicional.'+
            'Todo Processo Criminal possui um regime inicial, o qual pode ser substituído'+
            'por um benefício se cumprido os requisitos de cada benefício.'+
            'Regime Aberto – Pena Restritiva de Direitos ou Sursis'+
            'Regime Fechado/Semiaberto (normalmente no Semiaberto) – Livramento'+
            'Condicional')
        }
        if (routeParams.id_info === 7) {
            setInformacao('Condições a serem observadas para o cumprimento correto da pena.')
        }
        if (routeParams.id_info === 8) {
            setInformacao('Frequência para realização das apresentações em Cartório.')
        }
        if (routeParams.id_info === 9) {
            setInformacao('Documentos a serem apresentados imediatamente em Cartório.')
        }
    },[])


    return (
        <View style={styles.main} >
            <View style={styles.detalheView} >
                <Text style={{fontSize:20, marginHorizontal: 3, backgroundColor: '#E2E2E2'}} >{informacao}</Text>
            </View>
        </View>
    )
}

export default Info;

const styles = StyleSheet.create({
    main:{
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#123141',
        alignItems: 'baseline',
        justifyContent: 'center',
    },

    detalheView:{
        width: '98%',
        height: '96%',
        marginTop: 23,
        alignItems: 'baseline',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        //justifyContent:'space-between',
    },
    buttonBack:{

    }
})