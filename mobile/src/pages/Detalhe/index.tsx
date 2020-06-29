import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Feather as Icon } from '@expo/vector-icons'; 
import Constants from "expo-constants";
import {useNavigation, useRoute} from '@react-navigation/native'
import api from '../../services/api';
import { RectButton } from "react-native-gesture-handler";
//import { ScrollView } from 'react-native-gesture-handler';

interface Params{
    id: number;
}

interface DataPessoa{
    cpf: string,
    dataNascimento: string,
    endereco: string,
    id: 1,
    nomeCompleto: string,
    nomeDaMae: string,
    nomeDoPai: string,
    telefone: string,
}

interface DataProcesso{
    ciclo: string,
    condicoesCumprimento: string,
    documentosPendentes: string,
    id: 1,
    numeroProcesso: string,
    penaCumprida: string,
    penaRemanescente: string,
    penaTotal: string,
    periodoApresentacoes: string,
    regimeBeneficio: string,
    remicoes: string,
    senha: string,
}

const Detalhe = () => {

    const route = useRoute();
    const routeParams = route.params as Params;

    const [dataPessoa, setDataPessoa] = useState<DataPessoa>({} as DataPessoa)
    const [dataProcesso, setDataProcesso] = useState<DataProcesso>({} as DataProcesso)

    const navigation = useNavigation();



    useEffect(() => {
        api.get(`processo/${routeParams.id}`).then(response => {
            setDataPessoa(response.data[0]);
            setDataProcesso(response.data[1]);
            //console.log(response.data)
        }).catch(error => {console.log(error)});
        //console.log('estou dentro de detalhe ', routeParams.id)
      },[])

    function handleNavigationToInfo(id_info: number){
        navigation.navigate('Info', {id_info: id_info});
    }


    return (
        <SafeAreaView style={{
            flex:1,
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#123141'
            
            }}>
                
            <View style={styles.main}>
            
                <ScrollView>

                    <View style={styles.detalheView}>


                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.fontTitle} >Nome:</Text>
                            </View>

                                <Text style={styles.font}>{dataPessoa.nomeCompleto}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.fontTitle} >Nome dos Pais:</Text>
                            </View>

                            <Text style={styles.font}>{dataPessoa.nomeDaMae}, {dataPessoa.nomeDoPai}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.fontTitle} >Data de Nascimento:</Text>
                            </View>

                            <Text style={styles.font}>{dataPessoa.dataNascimento}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                
                                <Text style={styles.fontTitle}>N° do Processo:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.numeroProcesso}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.fontTitle} >Pena Total:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaTotal}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(2)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Remições:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.remicoes}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(3)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Pena Cumprida:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaCumprida}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(4)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Pena Remanescente:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaRemanescente}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(5)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Periodo de Apresentações:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.periodoApresentacoes}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(6)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Regime/Beneficio:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.regimeBeneficio}</Text>
                        </View>

                        <View style={styles.campoView} >
                            
                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(7)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Condições de cumprimento:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.condicoesCumprimento}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(8)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Periocidade:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.ciclo}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <RectButton style={styles.button} onPress={()=>handleNavigationToInfo(9)}>
                                    <Icon name="info" size={24} color="black" />
                                </RectButton>
                                <Text style={styles.fontTitle}>Documentos Pendentes:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.documentosPendentes}</Text>
                        </View>

                    </View>

                </ScrollView>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#123141'
    },

    detalheView:{
        flex: 1,
        
        alignItems: 'center',
        //justifyContent:'space-between',
    },

    campoView:{
        width: '98%',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        backgroundColor: '#E2E2E2',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 2,
        paddingLeft: 2
    },

    campoIdentifica:{
        //paddingRight: '50%',
        alignItems: 'center',
        flexDirection: 'row',
    },

    font:{
        fontSize: 20, 
        marginLeft: 10
    },
    fontTitle:{
        fontSize: 18, 
        marginLeft: 4,
        fontWeight: "700",
        
    },
        //style do botão para login
    button: {
        width: '6%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
        },
    
})

export default Detalhe;