import StartingHeader from "../StartingPage/StartingHeader"
import classes from "./Layout.module.scss"
import { useSelector } from "react-redux"

export default function Layout (props) {
    const isButtonToggled = useSelector((state) => {return state.layoutSlice.isButtonToggled})

    const style = {
        backgroundColor: isButtonToggled ? "#f4f5fd" : "#2c1e36"
    }

    return (
    <div>
        <main style={style} className={classes.main}>{props.children}</main>
    </div>
    )
} 