import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import SearchBar from '../../components/SearchBar';
import { styles } from './styles';
import { useFlightList } from './hooks/useFlightList';

const FlightList = () => {
    const {onSortPress, isSort, list, sortMin, sortMax, sortOption} = useFlightList();

    const renderItem = ({item, index}) => {
        const {displayData, fare} = item || {};
        const {airlines, destination, source, stopInfo, totalDuration} = displayData || {};
        const {airlineName, flightNumber} = airlines?.[0] || {};

        

        return (
            <View style={styles.flightContainer} key={index}>
                <View style={styles.flightTop}>
                    <Text style={styles.headText}>{flightNumber}</Text>
                    <Text style={styles.headText}>{airlineName}</Text>
                </View>
                <View style={styles.flightHeader}>
                    <View style={styles.airportView}>
                        <Text style={styles.codeText}>{source?.airport?.airportCode}</Text>
                        <Text>{source?.airport?.airportName}</Text>
                        <Text>{source?.airport?.cityName}</Text>
                        <Text>{source?.depTime}</Text>
                    </View>
                    <View style={styles.airportView}>
                        <Text style={styles.codeText}>{destination?.airport?.airportCode}</Text>
                        <Text>{destination?.airport?.airportName}</Text>
                        <Text>{destination?.airport?.cityName}</Text>
                        <Text>{destination?.arrTime}</Text>
                    </View>
                </View>
                <View style={styles.flightBody}>
                    <Text style={styles.durationText}>{"Total Duration : " + totalDuration}</Text>
                    <Text style={styles.durationText}>{"Stoppage: " + stopInfo}</Text>
                    <Text style={styles.durationText}>{"Price: " + fare}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <SearchBar />
                <TouchableOpacity style={styles.sortView} onPress={onSortPress}>
                    <Text>Sort</Text>
                </TouchableOpacity>
            </View>
            {
                (isSort) && 
                    <View style={styles.sortContainer}>
                        <View style={styles.sortView1}>
                            <TouchableOpacity style={sortOption === 1 && styles.selectedIndex} onPress={sortMin}>
                                <Text>Min to Max</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sortView1}>
                            <TouchableOpacity style={sortOption === 2 && styles.selectedIndex} onPress={sortMax}>
                                <Text>Max to Min</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
            <View style={styles.body}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        </View>
    );
};

export default FlightList;