import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 12,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 200,
        alignItems: 'flex-start',
        position: 'relative',

    }, logo: {
        width: 40, height: 40, borderRadius: 20, marginBottom: 10,
    }, name: {
        fontSize: 12, color: '#6b7280', marginBottom: 4,
    }, title: {
        fontSize: 14, fontWeight: 'bold', color: '#1f2937', marginBottom: 4,
    }, description: {
        fontSize: 12, color: '#9ca3af',
    }, date: {
        fontSize: 12, color: '#9ca3af', position: 'absolute', top: 15, right: 15,
    },
});

export default styles;
