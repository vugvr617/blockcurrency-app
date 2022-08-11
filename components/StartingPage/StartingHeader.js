import classes from './StartingHeader.module.scss';
import DarkModeButton from './DarkModeButton/DarkModeButton';
import { useSelector } from 'react-redux';

export default function StartingHeader(props) {
    const isButtonToggled = useSelector((state) => {return state.layoutSlice.isButtonToggled})

    const pStyle = {
        margin: props.isColumn ? "0.5em auto" : "1em 0"
    }

    return (
        <div className={isButtonToggled ? `${classes.div} ${classes.bglight}` : `${classes.div} ${classes.bgdark}`}>
            <header style={props.styles} className={isButtonToggled ? `${classes.header} ${classes.bglight}` : `${classes.header} ${classes.bgdark}`}>
                <p style = {pStyle} className={classes.header_logo}>BLOCK<span className={classes.header_logoright}>CURRENCY</span></p>
                <DarkModeButton isColumn={props.isColumn}></DarkModeButton>
            </header>
        </div>
    )
} 