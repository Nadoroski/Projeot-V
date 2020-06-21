import React, {useEffect, useState} from "react";
import { View,Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
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
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 3) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 4) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 5) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 6) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 7) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 8) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 9) {
            setInformacao('Aqui ele receberá outra informação')
        }
        if (routeParams.id_info === 10) {
            setInformacao('Aqui ele receberá outra informação')
        }
    },[])


    return (
        <View style={styles.main} >
            <View style={styles.detalheView} >
                <Text style={{fontSize:20}} >{informacao}</Text>
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
        alignItems: 'baseline',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        //justifyContent:'space-between',
    },
})