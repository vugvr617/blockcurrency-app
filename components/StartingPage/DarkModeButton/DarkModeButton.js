import classes from './DarkMode.module.scss'
import MoonIcon from './moon-icon'
import SunIcon from './SunIcon'
import {useDispatch, useSelector} from 'react-redux'
import { buttonToggleHandler } from '../../../store/layoutSlice'

export default function DarkModeButton(props) {
    const dispatch = useDispatch();
    const isButtonToggled = useSelector((state) => {return state.layoutSlice.isButtonToggled})

    const switchStyle = {
        backgroundColor: isButtonToggled ? "#2c1e36" : "#fbfafb"
    }
    const clickHandler = () => {
        dispatch(buttonToggleHandler());
    }       

    const styles = {
        margin: props.isColumn ? "auto" : "unset"
    }

    return (
        <div style={styles} className={classes.button_div}>
            <MoonIcon></MoonIcon>
            <label style={switchStyle} className={classes.switch}>
                <input onClick={clickHandler} className={classes.input} type="checkbox"></input>
                <span className={isButtonToggled ? `${classes.lightslider}` : `${classes.slider}`}></span>
            </label>
            <SunIcon></SunIcon>
        </div>
    )
} 