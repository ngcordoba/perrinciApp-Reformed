import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import styles from './style'
import React, { useEffect, useState } from 'react'

import ImgBackground from '../../../components/ImageBackground'
import ActivityUser from '../../../components/User_ListActivity'

const mockUserActivityData = [
    {
        id: "1",
        walkerName: "Gabriel",
        walkerLastName: "Cordoba",
        date: "2023/05/23",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        price: "500",
        status: "finished"
    },
    {
        id: "2",
        walkerName: "Lio",
        walkerLastName: "Messi",
        date: "2023/05/22",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/420px-Lionel_Messi_20180626.jpg",
        price: "1900",
        status: "finished"
    },

];

const ActivityScreen = ({ navigation }) => {

    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        setActivityList(mockUserActivityData);
    }, []);

    /*
      useEffect(() => {
        // Realizar la llamada al backend aquí
        const fetchActivityUser = async () => {
          try {
            const response = await fetch('URL_DE_TU_API/userActivityData');
            const data = await response.json();
            setWalkersActives(data);
          } catch (error) {
            console.error('Error fetching activity:', error);
          }
        };
    
        fetchActivityUser();
      }, []); 
    
      */

    const renderWalksFinished = ({ item }) => (
        <View style={styles.listOfWalkers}>
            <ActivityUser item={item} />
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Detalle de tus paseos
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={activityList}
                        renderItem={renderWalksFinished}
                        keyExtractor={item => item.id}
                    >

                    </FlatList>

                </View>
            </View>

        </SafeAreaView>
    )

}

export default ActivityScreen;
