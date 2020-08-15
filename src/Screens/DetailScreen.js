import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

function DetailScreen({ route, navigation }) {

    const { musicItem } = route.params;

    return (
        <View style={styles.container}>
            <Image
                style={styles.artwork}
                source={{ uri: musicItem.artworkUrl100 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    artwork: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2
    }
})

export default DetailScreen
