import { Text, SafeAreaView, StatusBar, View, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from './styles';
import ImgBackground from '../../../components/ImageBackground';
import PerrinciButton from '../../../components/ButtonRegular';
import ListWalksActives from "../../../components/Walker_ListWalksActives"


const WalksActives = ({ navigation }) => {


    const mockWalksActives = [
        {
            idWalk: 1,
            idRide: 1,
            idUser: 1,
            userName: "Ezequiel Fornes",
            userPhone: 1123942295,
            userAddress: "Mario Bravo 942",
            userAvatar: "x",
            dogName: "Tobi",
            dogRaza: "San bernardo",
            dogAge: "3 años",
            dogAvatar: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/2022/10/07/sindrome_braquicefalico_perro_p.jpg",
            dogWalksCompleted: "3",
            dogQualificationProm: "5"
        },

        {
            idWalk: 2,
            idRide: 2,
            idUser: 2,
            userName: "Matias Guerra",
            userPhone: 1123942295,
            userAddress: "Libertador 3523",
            userAvatar: "",
            dogName: "Felipa",
            dogRaza: "Bulldog",
            dogAge: "6 años",
            dogAvatar: "https://www.losandes.com.ar/resizer/4G1YHAlpq83ayyHDAyH62acrDTc=/1023x1012/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/HBSTEZJTME2DMY3DGQ3DMYLGMQ.jpg",
            dogWalksCompleted: "10",
            dogQualificationProm: "3"
        },
    ]
    const [walksActivesList, setwalksActiveList] = useState([])

    useEffect(() => {
        setwalksActiveList(mockWalksActives);
    }, []);

    /*
      useEffect(() => {
        // Realizar la llamada al backend aquí
        const fetchActivityUser = async () => {
          try {
            const response = await fetch('URL_DE_TU_API/walksActives');
            const data = await response.json();
            setWalkersActives(data);
          } catch (error) {
            console.error('Error fetching activity:', error);
          }
        };
    
        fetchWalksActives_Walker();
      }, []); 
    
      */

    const handleSelectUser = (item) => {
        navigation.navigate("VerPerfilUsuario", {
            userInfo: item,
        });
    };

    const renderListOfWalksActives = ({ item }) => (
        <View >
            <ListWalksActives item={item} onSelected={handleSelectUser} />
        </View>
    )


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Tus paseos activos
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={walksActivesList}
                        renderItem={renderListOfWalksActives}
                        keyExtractor={item => item.id} />

                </View>

                <View style={styles.buttonContainer}>

                    <PerrinciButton
                        onPress={() => navigation.navigate("HomeScreen")}
                        text={"Finalizar actividad"}>
                    </PerrinciButton>

                    <Button
                        onPress={() => navigation.navigate("EmpezarAPasear")}
                        title="Volver al mapa">
                    </Button>

                </View>





            </View>

        </SafeAreaView>
    )

}

export default WalksActives;