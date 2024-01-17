import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import styles from './style'
import React, { useState, useEffect } from 'react'

import ImgBackground from '../../../components/ImageBackground'
import ActivityWalker from '../../../components/Walker_ListActivity'


const mockWalkerActivityData = [
    {
        id: "1",
        dogName: "Tobi",
        userName: "Ezequiel",
        date: "2023/07/20",
        img: "https://www.losandes.com.ar/resizer/4G1YHAlpq83ayyHDAyH62acrDTc=/1023x1012/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/HBSTEZJTME2DMY3DGQ3DMYLGMQ.jpg",
        price: "500",
        status: "finished"
    },
    {
        id: "2",
        dogName: "Felipa",
        userName: "Matias",
        date: "2023/07/19",
        img: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/2022/10/07/sindrome_braquicefalico_perro_p.jpg",
        price: "1900",
        status: "finished"
    },

];

const ActivityScreen = ({ }) => {

    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        setActivityList(mockWalkerActivityData);
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


    const renderWalker_WalksFinished = ({ item }) => (
        <View style={styles.listOfWalkers}>
            <ActivityWalker item={item} />
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Detalle de tus paseos completados
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={activityList}
                        renderItem={renderWalker_WalksFinished}
                        keyExtractor={item => item.id}
                    >

                    </FlatList>

                </View>
            </View>

        </SafeAreaView>
    )

}

export default ActivityScreen;


