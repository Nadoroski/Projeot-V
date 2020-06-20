import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Feather as Icon } from '@expo/vector-icons'; 
import Constants from "expo-constants";
import {useNavigation, useRoute} from '@react-navigation/native'
import api from '../../services/api';
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



    useEffect(() => {
        api.get(`processo/${routeParams.id}`).then(response => {
            setDataPessoa(response.data[0]);
            setDataProcesso(response.data[1]);
            console.log(response.data)
        }).catch(error => {console.log(error)});
        //console.log('estou dentro de detalhe ', routeParams.id)
      },[])


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
                                <Text style={styles.font} >Nome:</Text>
                            </View>

                                <Text style={styles.font}>{dataPessoa.nomeCompleto}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.font} >Nome dos Pais:</Text>
                            </View>

                            <Text style={styles.font}>{dataPessoa.nomeDaMae}, {dataPessoa.nomeDoPai}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Text style={styles.font} >Data de Nascimento:</Text>
                            </View>

                            <Text style={styles.font}>{dataPessoa.dataNascimento}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>N° do Processo:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.numeroProcesso}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font} >Pena Total:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaTotal}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Remições:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.remicoes}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Pena Cumprida:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaCumprida}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Pena Remanescente:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.penaRemanescente}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Regime/Beneficio:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.regimeBeneficio}</Text>
                        </View>

                        <View style={styles.campoView} >
                            
                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Condições de cumprimento:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.condicoesCumprimento}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Ciclo:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.ciclo}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Periodo de Apresentações:</Text>
                            </View>

                            <Text style={styles.font}>{dataProcesso.periodoApresentacoes}</Text>
                        </View>

                        <View style={styles.campoView} >

                            <View style={styles.campoIdentifica} >
                                <Icon name="info" size={24} color="black" style={{marginLeft: 4}} />
                                <Text style={styles.font}>Documentos Pendentes:</Text>
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
        backgroundColor: '#FFF',
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
        marginBottom:4
    },

    campoIdentifica:{
        //paddingRight: '50%',
        alignItems: 'center',
        flexDirection: 'row',
    },

    font:{
        fontSize: 18, 
        marginLeft: 4
    }
    
})

export default Detalhe;