import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const index = () => {



    const renderCalificationsItem = ({ calification }) => {
        <View>
            <CalificationItems />
        </View>
    }

    return (
        <View>
            <FlatList
            //data: {CALIFICACIONES} 
            // renderItem: {renderCaterogiresItem}
            // KeyExtractor: {item => calif.id}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})