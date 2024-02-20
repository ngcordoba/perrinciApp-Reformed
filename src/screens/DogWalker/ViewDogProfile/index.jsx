import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import ImgBackground from '../../../components/ImageBackground';
import { useNavigation } from '@react-navigation/native';
import Walker_ViewProfileDogAndWalker from '../../../components/Walker_ViewProfileDogAndUser'

import { fontSizes } from '../../../theme/fonts';

const mockDataUserDog = [
    {
        id: "1",
        dogName: "Tobi",
        userName: "Ezequiel",
        address: "Mario Bravo 942",
        age: "1 año",
        imgUser: "https://tntsports.com.ar/__export/1696264222933/sites/tntsports/img/2023/09/25/marcelo_gallardo_crop1695666718963.jpg_1180740533.jpg",
        imgDog: "https://www.losandes.com.ar/resizer/4G1YHAlpq83ayyHDAyH62acrDTc=/1023x1012/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/HBSTEZJTME2DMY3DGQ3DMYLGMQ.jpg",
        raza: "Salchicha",
        dogWeight: "2kg",
        qualification: "4 ★"
    },
]

const ViewDogAndWalker = ({ item }) => {
    const navigation = useNavigation();

    const [dataUserDog, setdataUserDog] = useState([])

    useEffect(() => {
        setdataUserDog(mockDataUserDog);
    }, []);

    /*
      useEffect(() => {
        // Realizar la llamada al backend aquí
        const fetchActivityUser = async () => {
          try {
            const response = await fetch('URL_DE_TU_API/walkerActivityData');
            const data = await response.json();
            setWalkersActives(data);
          } catch (error) {
            console.error('Error fetching activity:', error);
          }
        };
    
        fetchActivityUser();
      }, []); 
    
      */

    const renderDogUserData = ({ item }) => (
        <View style={styles.listOfWalkers}>
            <Walker_ViewProfileDogAndWalker item={item} />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground />
            <FlatList
                data={dataUserDog}
                renderItem={renderDogUserData}
                keyExtractor={item => item.id}
            >

            </FlatList>
        </SafeAreaView>
    )
}

export default ViewDogAndWalker;



const styles = StyleSheet.create({
    container: {
    },
    contentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', // Espacio uniforme alrededor de elementos
        paddingHorizontal: 20,
        marginBottom: "10%"
    },
    dogContainerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', // Espacio uniforme alrededor de elementos
        paddingHorizontal: 20,
    },
    photoContainer: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center', // Centra la imagen horizontalmente
    },
    image: {
        width: '70%',
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: fontSizes.text,
        marginBottom: 10,
        color: 'black', // Centra el texto horizontalmente
    },
    scoreText: {
        fontSize: fontSizes.subtitle,
        marginBottom: 10, // Centra el texto horizontalmente
    },
    label: {
        fontSize: fontSizes.text,
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: "10%" // Espacio uniforme entre botones

    },
});