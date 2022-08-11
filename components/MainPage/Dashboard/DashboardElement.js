import classes from './DashboardElement.module.scss';
import { useSelector } from 'react-redux';
import XIcon from './XIcon';

export default function DashboardElement(props) {
    const currencySign = useSelector((state) => {return state.layoutSlice.currencySign})
    const lastUpdated = `Last updated: ${props.lastUpdated.slice(8,10)}.${props.lastUpdated.slice(5,7)}.${props.lastUpdated.slice(0,4)} ${props.lastUpdated.slice(11,13)}:${props.lastUpdated.slice(14,16)}`

    const handleDelete = () => {
        let data = JSON.parse(localStorage.getItem('data'));
        for(let i in data) {
            if(data[i] == props.name.toLowerCase()){
                data.splice(i, 1)
            }
        }
        localStorage.setItem('data', JSON.stringify(data));
        props.deleteHandler();
    }

    return (
        <div className={classes.element}>
            <XIcon handleDelete={handleDelete}></XIcon>
            <div className={classes.element_inner}>
                <img src={props.image}></img>
                <div className={classes.element_name}>
                    <h3>{props.name}</h3>
                    <p>{props.symbol.toUpperCase()}</p>
                </div>
            </div>
            <h2>{currencySign}{props.price}</h2>
            <p className={classes.element_date}>{lastUpdated}</p>
        </div>
    )
}