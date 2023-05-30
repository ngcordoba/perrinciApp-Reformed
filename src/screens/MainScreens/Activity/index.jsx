import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import styles from './style'
import React from 'react'

import ImgBackground from '../../../components/ImgBackground/Background'
// import { WALKS } from '../../../data/walksStatus'
import ActivityUser from '../../../components/ActivityUser'
import { useSelector } from 'react-redux'

const ActivityScreen = ({ navigation, route }) => {

  const walks = useSelector(state => state.walks.walks)
  const walkSelected = useSelector(state => state.walks.selected)
  // const walksfinished = WALKS.filter(walksfinished => walksfinished.status === "finished")

  const renderWaklsFinished = ({ item }) => (
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
            data={walks}
            renderItem={renderWaklsFinished}
            keyExtractor={item => item.id}
          >

          </FlatList>

        </View>
      </View>

    </SafeAreaView>
  )

}

export default ActivityScreen;
