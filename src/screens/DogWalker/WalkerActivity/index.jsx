import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import styles from './style'
import React from 'react'

import ImgBackground from '../../../components/ImageBackground'
import ActivityWalker from '../../../components/Walker_ListActivity'
import { useSelector } from 'react-redux'

const ActivityScreen = ({ }) => {

    const walker_walksFinished = useSelector(state => state.walker_walksFinished.walker_walksFinished)

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
                        data={walker_walksFinished}
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


