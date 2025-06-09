import { useEffect ,useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((response)=>response.json())
        .then((response)=>setData(response[currency]))
        .catch((error)=>console.error("Error fetching currency data:", error));
    
    },[ currency])
    console.log(data);
    return data


}

export default useCurrencyInfo;
