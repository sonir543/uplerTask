import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { updateSearch } from "../../../redux/reducer/Search";
   

const useSearchBar = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const onChangeText = (value: string) => {
        setSearchText(value);
    }

    useEffect(() => {
        dispatch(updateSearch(searchText));
    }, [searchText]);

    return {    
        onChangeText,
        searchText,
    }
}

export default useSearchBar;