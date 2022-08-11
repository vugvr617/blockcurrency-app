import classes from './Exchange.module.scss';
import CurrencyChangeSection from '../Dashboard/CurrencyChangeSection';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ExchangeElement from './ExchangeElement';

export default function Exchange() {
    const [dataString, setDataString] = useState('');
    const [apiData, setApiData] = useState([]);
    let mainStyle = `${classes.main} ${classes.main_dark}`;
    let storageData;
    useEffect(() => {
    if (JSON.parse(localStorage.getItem('data'))) {
        storageData = JSON.parse(localStorage.getItem('data'));
    }}, [])

    const currency = useSelector((state) => { return state.layoutSlice.currency })
    const isLight = useSelector((state) => { return state.layoutSlice.isButtonToggled})

    useEffect(() => {
        if (storageData) {
            setDataString(storageData.join());
        }
        if (dataString) {
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${dataString}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(response => response.json())
                .then(data => setApiData(data));
        }
    }, [dataString, storageData])

    if (isLight) {
        mainStyle = `${classes.main} ${classes.main_light}`;
    }

    return (
        <main className={mainStyle}>
            <div className={classes.main_header}>
                <h1>Exchange</h1>
            </div>
            <p>You can see the latest exchange rates by writing the amount of specific crypto currency
                <br></br>You can add new coins, and choose converting currency (USD, GBP, EUR) from Dashboard
            </p>
            <div className={classes.coins_div}>
                {apiData && apiData.map((coin) => {
                    return <ExchangeElement key={coin.id}
                        name={coin.name}
                        symbol={coin.symbol}
                        image={coin.image}
                        price={coin.current_price}
                        lastUpdated={coin.last_updated}></ExchangeElement>
                })}
            </div>
        </main>
    )
}