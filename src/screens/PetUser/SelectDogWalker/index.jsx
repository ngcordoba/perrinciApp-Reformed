import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import ImgBackground from '../../../components/ImageBackground';
import Button from '../../../components/ButtonRegular';
import ViewWalkersActives from '../../../components/User_ViewWalkersActives';
import styles from './style';

const mockWalkersData = [
    {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
        score: 4.5,
    },


    {
        id: 2,
        name: 'Juan Roman',
        lastName: 'Riquelme',
        img: 'https://pbs.twimg.com/media/FjFekIBWAAEjE7D.jpg:large',
        score: 5,
    },

];

const SelectDogWalker = ({ navigation }) => {
    const [walkersActives, setWalkersActives] = useState([]);

    useEffect(() => {
        setWalkersActives(mockWalkersData);
    }, []);

    /*
      useEffect(() => {
        // Realizar la llamada al backend aquí
        const fetchWalkers = async () => {
          try {
            const response = await fetch('URL_DE_TU_API/walkersActivos');
            const data = await response.json();
            setWalkersActives(data);
          } catch (error) {
            console.error('Error fetching walkers:', error);
          }
        };
    
        fetchWalkers();
      }, []); 
    
      */

    const handleSelectWalker = (item) => {
        navigation.navigate("Perfildelpaseador", {
            walkerInfo: item,
            id: item.id,
            name: item.name,
            lastName: item.lastName,
        });
    };

    const renderListOfWalkers = ({ item }) => (
        <ViewWalkersActives item={item} onSelected={handleSelectWalker} />
    );

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >
            <ImgBackground />
            <View style={styles.container}>
                <Text style={styles.textHeader}>
                    Selecciona a tu paseador
                </Text>
            </View>

            <View style={styles.walkerListContainer}>
                <View style={styles.containerList}>
                    <FlatList
                        data={walkersActives}
                        renderItem={renderListOfWalkers}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate("TabUserNav")}
                        text={"Volver al menu"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SelectDogWalker;
