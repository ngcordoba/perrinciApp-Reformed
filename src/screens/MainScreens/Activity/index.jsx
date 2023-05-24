import { Text, SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import styles from './style'
import React from 'react'

import ImgBackground from '../../../components/ImgBackground/Background'
import { FINISHEDWALKSUSER } from '../../../data/finishedWalksUser'
import ActivityUser from '../../../components/ActivityUser'

const ActivityScreen = ({ navigation, route }) => {

  const walksfinished = FINISHEDWALKSUSER.filter(walksfinished => walksfinished.status === "finished")

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
            data={walksfinished}
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
