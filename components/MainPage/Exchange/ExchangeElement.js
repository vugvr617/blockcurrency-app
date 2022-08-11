import classes from './ExchangeElement.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { mainPriceChange, setSelectedCoin } from '../../../store/layoutSlice';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { setStateChanger, setCurrentValue } from '../../../store/layoutSlice';

export default function ExchangeElement(props) {
    const [inputValue, setInputValue] = useState('');
    const stateChanger = useSelector((state) => { return state.layoutSlice.stateChanger })
    const dispatch = useDispatch();
    const currencySign = useSelector((state) => { return state.layoutSlice.currencySign });
    const mainPrice = useSelector((state) => { return state.layoutSlice.mainPrice });
    const selectedCoin = useSelector((state => { return state.layoutSlice.selectedCoin }));
    const currentValue = useSelector((state => { return state.layoutSlice.currentValue }));
    const inputRef = useRef();

    useEffect(() => {
        if (props.name != selectedCoin) {
            if (mainPrice) {
                setInputValue((Number(mainPrice) / Number(props.price)) * currentValue)
            } else {
                setInputValue('');
            }
            if (currentValue == '') {
                setInputValue('');
            }
        } else {
            dispatch(mainPriceChange(Number(props.price)));
            dispatch(setSelectedCoin(props.name));
            dispatch(setCurrentValue(inputValue));
        }
    }, [inputValue, mainPrice, selectedCoin, currentValue])

    const inputChangeHandler = () => {
        setInputValue(inputRef.current.value);
        dispatch(mainPriceChange(Number(props.price)));
            dispatch(setSelectedCoin(props.name));
            dispatch(setCurrentValue(inputValue));
    }

    return (
        <div className={classes.element}>
            <div className={classes.element_inner}>
                <img src={props.image}></img>
                <div className={classes.element_name}>
                    <h3>{props.name}</h3>
                    <p>{props.symbol.toUpperCase()}</p>
                </div>
            </div>
            {<div className={classes.input_div}><h2>{currencySign}</h2><input ref={inputRef} onChange={inputChangeHandler} value={inputValue} type="number"></input></div>}
        </div>
    )
}