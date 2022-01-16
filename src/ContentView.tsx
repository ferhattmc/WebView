import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
const styles = {
    container: {
        flex: 1,
        marginTop: 50
    }
}
const renderLoadingView = () => {
    return (
        <View style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator size="large" color="blue" />
        </View>);
}
const ContentView = () => {
    return (
        <WebView
            style={styles.container}
            startInLoadingState
            renderLoading={renderLoadingView}
            source={{ uri: 'https://mehmetonline.com' }}
        />
    );
}
export default ContentView;