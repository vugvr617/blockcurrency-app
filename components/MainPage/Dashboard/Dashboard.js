import classes from './Dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import DashboardElement from './DashboardElement';
import { currencyChangeReducer } from '../../../store/layoutSlice';
import PlusIcon from './PlusIcon';
import CurrencyChangeSection from './CurrencyChangeSection';

export default function Dashboard() {
    const [apiData, setApiData] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [dataArray, setDataArray] = useState([]);
    const [dataString, setDataString] = useState('');
    const [stateChanger, increaseStateChanger] = useState(0);

    const [isAddShown, setAddShown] = useState(false);
    const inputRef = useRef();
    const isLight = useSelector((state) => { return state.layoutSlice.isButtonToggled });
    const currency = useSelector((state) => {return state.layoutSlice.currency})
    let mainStyle = `${classes.main} ${classes.main_dark}`;
    let selectStyle = `${classes.select} ${classes.select_dark}`;

    let storageData = ['bitcoin', 'ethereum', 'tether'];

    useEffect(() => {
        if (dataArray) {
            setDataString(dataArray.join());
        }
    }, [dataArray])

    const deleteHandler = () => {
        increaseStateChanger((prevState) => { return prevState = prevState + 1 });
    }

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('data'))) {
            localStorage.setItem('data', JSON.stringify(storageData));
        }
        if (JSON.parse(localStorage.getItem('data')).length != dataArray.length) {
            setDataArray(JSON.parse(localStorage.getItem('data')));
        }
    }, [storageData, stateChanger])

    if (isLight) {
        mainStyle = `${classes.main} ${classes.main_light}`;
        selectStyle = `${classes.select} ${classes.select_light}`
    }

    const shownHandler = () => {
        setAddShown(true);
    }

    const handleSearchChange = () => {
        setSearchValue(inputRef.current.value);
    }

    const searchSubmit = () => {
        let existingElement = dataArray.find((coin) => { return coin == searchValue.toLowerCase() })
        if (!existingElement) {
            setDataArray((prevArray) => { return [...prevArray, searchValue.toLowerCase()]});
            localStorage.setItem('data', JSON.stringify([...dataArray, searchValue.toLowerCase()]))
            setSearchValue('');
            setAddShown(false);
        }
    }

    useEffect(() => {
        if (dataString) {
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${dataString}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(response => response.json())
                .then(data => setApiData(data));
        }
    }, [currency, dataString, dataArray])

    return (
        <main className={mainStyle}>
            <div className={classes.main_header}>
                <h1>Dashboard</h1>
                <CurrencyChangeSection></CurrencyChangeSection>
            </div>
            <p>You can track the prices of current cryptocurrencies, and add new ones
                <br></br>We added the most popular currencies for you
            </p>
            <div className={classes.coins_div}>
                {apiData && apiData.map((coin) => {
                    return <DashboardElement key={coin.id}
                        deleteHandler={deleteHandler}
                        name={coin.name}
                        symbol={coin.symbol}
                        image={coin.image}
                        price={coin.current_price}
                        lastUpdated={coin.last_updated}></DashboardElement>
                })}
                <div className={classes.coins_add}>
                    {!isAddShown && <button className={classes.coins_add_button} onClick={shownHandler}><div><PlusIcon></PlusIcon><br></br>Add new currency</div></button>}
                    {isAddShown && <div className={classes.coins_input_div}>
                        <label htmlFor="namesearch"><p>Enter name of currency:</p></label>
                        <input ref={inputRef} value={searchValue} onChange={handleSearchChange} id="namesearch" type="text"></input>
                        <button onClick={searchSubmit} className={classes.coins_input_add_button}>Add</button>
                    </div>}
                </div>
            </div>
        </main>
    )
}