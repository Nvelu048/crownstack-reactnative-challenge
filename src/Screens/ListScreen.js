import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../Components'
const ListScreen = ({ route, navigation, musicList }) => {

    function onCardClick(musicItem) {
        navigation.navigate('Song Detail', {
            musicItem: musicItem
        })
    }

    const musicData = musicList.map((musicItem) => <Card key={musicItem.trackId} musicItem={musicItem} onClick={() => onCardClick(musicItem)} />)

    return (
        <ScrollView contentContainerStyle={(musicData.length == 0) ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : {}}>
            {musicData.length > 0 && musicData}
            {musicData.length == 0 &&
                <ActivityIndicator size="large" color="#02AFAC" />
            }
        </ScrollView>
    )
}

export default ListScreen;
