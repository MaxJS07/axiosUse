import React, { useEffect, useState } from 'react'

const useDBData = () => {
  
    const [dbData, setDbData] = useState();
    const [searchTermDb, setSearchTermDb] = useState("")

    const fetchData = async () => {
        try {
            const data = await fetch("https://dragonball-api.com/api/characters");
            const jsonData = await data.json();
            setDbData(jsonData.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() =>{
        fetchData();
    }, [])


    return {
        dbData,
        searchTermDb,
        setSearchTermDb
    }
}

export default useDBData