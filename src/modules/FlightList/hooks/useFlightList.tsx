import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateList } from "../../../redux/reducer/FlightInfo";
import { RootState } from "../../../redux/store/store";



export const useFlightList = () => {
    const list = useSelector((state: RootState) => state.flight.list);
    const searchText = useSelector((state: RootState) => state.search.search);
    const [result, setResult] = useState([]);
    const [sortOption, setSortOption] = useState(0);
    const dispatch = useDispatch();
    const [isSort, setIsSort] = useState(false);
    const onSortPress = () => {
        setSortOption(0);
        setIsSort(!isSort);
    };

    const getResponse = async () => {
        const response =  await axios.get('https://api.npoint.io/378e02e8e732bb1ac55b');
        const list = response?.data?.data?.result || [];
        dispatch(updateList(list))
    };

    const sortMin = () => {
        setSortOption(1);
    };

    const sortMax = () => {
        setSortOption(2);
    };

    useEffect(() => {
        const res = [];
        list.map((item)=> {
            const data = item?.displayData?.airlines?.[0]?.airlineName.includes(searchText);
            if(data) res.push(item);
        });
        setResult(res);
    }, [searchText]);

    useEffect(()=> {
        let newResult = [...list];
        newResult.sort((item1, item2) => (item1?.fare - item2?.fare) );
        if(sortOption === 0) 
        newResult = [];
        if(sortOption === 2)
        newResult.reverse();
        setResult(newResult);
    }, [sortOption]);

    useEffect(() => {
        setResult(list);
    }, [list]);

    useEffect(() => {
        getResponse();
    }, []);

    return {
        onSortPress,
        isSort,
        list: result,
        sortMin,
        sortMax,
        sortOption,
    };
};

