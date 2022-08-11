import classes from './MainPage.module.scss';
import { useSelector } from 'react-redux';
import SideNav from './SideNav/SideNav';
import Dashboard from './Dashboard/Dashboard';
import Exchange from './Exchange/Exchange';

export default function MainPage (props) {
    return (
        <main className={`${classes.main}`}>
            <SideNav></SideNav>
            {props.path == '/dashboard' && <Dashboard></Dashboard>}
            {props.path == '/exchange' && <Exchange></Exchange>}
        </main>
    )
}