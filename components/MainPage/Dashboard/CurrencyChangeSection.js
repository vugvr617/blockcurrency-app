import classes from './Dashboard.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { currencyChangeReducer, currencySignReducer } from '../../../store/layoutSlice';

export default function CurrencyChangeSection() {
    const currencyRef = useRef();
    const dispatch = useDispatch();
    let selectStyle = `${classes.select} ${classes.select_dark}`;

    const currencyChangeHandler = () => {
        switch (currencyRef.current.value) {
            case 'usd':
                dispatch(currencySignReducer('$'));
                dispatch(currencyChangeReducer('usd'));
                break;
            case 'eur':
                dispatch(currencySignReducer('€'));
                dispatch(currencyChangeReducer('eur'));
                break;
            case 'gbp':
                dispatch(currencySignReducer('£'));
                dispatch(currencyChangeReducer('gbp'));
                break;
        }
    }

    return (
        <select ref={currencyRef} onChange={currencyChangeHandler} className={selectStyle} id="currencies" name="currencies">
            <option value="usd" selected>USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
        </select>
    )
}