import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: 'grey',
        elevation: 3,
    },
    sortView: {
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    sortContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
    },
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    flightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: '90%',
        height: '40%',
        marginHorizontal: 10,
        marginVertical: 8,
        padding: 4,
        elevation: 10,
        backgroundColor: 'white',
        borderWidth: 0.4,
        borderRadius: 4,
    },
    flightHeader: {
        flexDirection: 'row',
    },
    airportView: {
        width: '50%',
    },
    codeText: {
        color: 'red',
        fontWeight: '500',
    },
    flightBody: {
        backgroundColor: 'grey',
        marginVertical: 4,
        paddingHorizontal: 4,
    },
    durationText: {
        color: 'white',
    },
    flightTop: {
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    headText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '30%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    sortView1: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedIndex: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: 'grey',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});