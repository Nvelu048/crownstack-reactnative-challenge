import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
function Card(props) {
    console.log(props.musicItem);
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick} activeOpacity={0.8}>
            <Image
                style={styles.artwork}
                source={{ uri: props.musicItem.artworkUrl100 }}
            />
            <View style={styles.musicInfo}>
                <Text style={styles.trackName} numberOfLines={2} >
                    {props.musicItem.trackName}
                </Text>
                <View style={styles.artistandlength}>
                    <Text style={styles.artistName}>
                        {props.musicItem.artistName}
                    </Text>
                    <Text style={styles.duration}>
                        {`${new Date(props.musicItem.trackTimeMillis).getMinutes()}m`}
                    </Text>
                </View>

            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
    },
    artwork: {
        width: 100,
        height: 100
    },
    musicInfo: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-evenly',
    },
    trackName: {
        fontSize: 20
    },
    artistName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    artistandlength: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    duration: {
        fontSize: 16
    }
})

export default Card