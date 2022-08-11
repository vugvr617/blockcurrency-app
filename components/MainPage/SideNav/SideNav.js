import classes from './SideNav.module.scss';
import StartingHeader from '../../StartingPage/StartingHeader';
import DashboardIcon from './Icons/DashboardIcon';
import ExchangeIcon from './Icons/ExchangeIcon';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SideNav() {
    const isLight = useSelector((state) => { return state.layoutSlice.isButtonToggled })
    const router = useRouter();

    let innerNavStyle = `${classes.innernav_element}`;
    let navStyle = `${classes.nav}`;
    let dashboardStyle = `${innerNavStyle}`;
    let exchangeStyle = `${innerNavStyle}`;

    if (router.pathname == '/dashboard') {
        dashboardStyle += ` ${innerNavStyle} ${classes.innernav_active}`
    } else if (router.pathname == '/exchange') {
        exchangeStyle = ` ${innerNavStyle} ${classes.innernav_active}`
    }

    if (isLight) {
        dashboardStyle += ` ${dashboardStyle} ${classes.nav_bg_light}`
        exchangeStyle += ` ${exchangeStyle} ${classes.nav_bg_light}`
        navStyle = ` ${classes.nav} ${classes.nav_light}`;
    } else {
        dashboardStyle += ` ${dashboardStyle} ${classes.nav_bg_dark}`
        exchangeStyle += ` ${exchangeStyle} ${classes.nav_bg_dark}`
        navStyle += ` ${classes.nav_dark}`
    }

    const logoStyle = {
        flexDirection: "column",
        maxWidth: "300px",
        borderBottom: "none",
        fontSize: "2rem",
        marginTop: "1em"
    }

    return (
        <nav className={`${navStyle}`}>
            <StartingHeader styles={logoStyle} isColumn={true}></StartingHeader>
            <div className={`${classes.innernav}`}>
                <Link href='/dashboard'>
                    <div className={`${dashboardStyle}`}>
                        <DashboardIcon></DashboardIcon>
                        <p>Dashboard</p>
                    </div>
                </Link>
                <Link href='/exchange'>
                <div className={`${exchangeStyle}`}>
                    <ExchangeIcon></ExchangeIcon>
                    <p>Exchange</p>
                </div>
                </Link>
            </div>
        </nav>
    )
}