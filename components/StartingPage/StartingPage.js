import StartingHeader from "./StartingHeader";
import classes from "./StartingHeader.module.scss"
import StartingMain from "./StartingMain";

export default function StartingPage() {
    return (
        <div className={classes.main}>
            <StartingHeader isColumn={false}></StartingHeader>
            <StartingMain></StartingMain>
        </div>
    )
}