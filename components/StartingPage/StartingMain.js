import classes from "./StartingMain.module.scss"
import CryptoImage from "../../public/crypto.png"
import { useSelector } from "react-redux"
import Link from "next/link"

export default function StartingMain() {
    const isButtonToggled = useSelector((state) => {return state.layoutSlice.isButtonToggled})

    const h3Style = {
        color: isButtonToggled ? "#2c1e36b0" : "rgba(255, 255, 255, 0.4)"
    }

    return (
        <div className={isButtonToggled ? `${classes.main} ${classes.main_bgdark}` : `${classes.main} ${classes.main_bglight}`}>
            <div className={classes.main_inner}>
                <h1>
                    Follow the latest changes in Cryptocurrency
                </h1>
                <h3 style={h3Style}>
                    Blockcurrency is the most convenient platform to <br></br> follow, analyse, and compare the latest prices of cryoptocurrencies
                </h3>
                <Link href="/dashboard"><button>Start Now</button></Link>
            </div>
            <img src="/crypto.png">
            </img>
        </div>
    )
}