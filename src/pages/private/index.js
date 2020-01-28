import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExtensionIcon from '@material-ui/icons/Extension';

import { Switch, Route } from 'react-router-dom';

//Komponent Halaman Private
import Home from './home';
import FetchDataApi from './fetchDataApi';
import ReactContext from './reactContext';
import Mahasiswa from './mahasiswa';
import User from './user';
import ReactHooks from './reactHooks';

//styles
import useStyles from './styles';

//firebase hook
import { useFirebase } from '../../components/FirebaseProvider';

export default function Dashboard() {
    const { auth } = useFirebase();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        auth.signOut();
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Training ReactJS
                    </Typography>
                    <IconButton color="inherit">
                        <SignOutIcon
                            onClick={handleSignOut} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Route path="/" exact children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/')
                            }}
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    }} />
                     <Route path="/fetchDataApi" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/fetchDataApi/fetchDataApi1')
                            }}
                        >
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="fetchDataApi" />
                        </ListItem>
                    }} />
                    <Route path="/reactContext" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/reactContext/reactContext1')
                            }}
                        >
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="React Context" />
                        </ListItem>
                    }} />
                    <Route path="/mahasiswa" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/mahasiswa/listMahasiswa1')
                            }}
                        >
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="List Mahasiswa" />
                        </ListItem>
                    }} />
                     <Route path="/user" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/user/alertUser')
                            }}
                        >
                            <ListItemIcon>
                                <AddAlertIcon />
                            </ListItemIcon>
                            <ListItemText primary="Alert User" />
                        </ListItem>
                    }} />
                     <Route path="/user" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? false : false}
                            onClick={() => {
                                history.push('/user/regUser')
                            }}
                        >
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Registrasi User" />
                        </ListItem>
                    }} />
                     <Route path="/reactHooks" children={(
                        { match, history }) => {
                        return <ListItem
                            button
                            selected={match ? true : false}
                            onClick={() => {
                                history.push('/reactHooks/reactHooks1')
                            }}
                        >
                            <ListItemIcon>
                                <ExtensionIcon />
                            </ListItemIcon>
                            <ListItemText primary="React Hooks" />
                        </ListItem>
                    }} />
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        <Route path="/mahasiswa" component={Mahasiswa}/>
                        <Route path="/reactContext" component={ReactContext}/>
                        <Route path="/fetchDataApi" component={FetchDataApi}/>
                        <Route path="/user" component={User}/>
                        <Route path="/reactHooks" component={ReactHooks}/>
                        <Route component={Home} />
                    </Switch>
                </Container>
            </main>
        </div>
    );
}

// import React from 'react';

// import {Switch, Route, Redirect} from 'react-router-dom';

// //Komponent Halaman Private
// import Home from './home';
// import Pengaturan from './pengaturan';
// import FetchDataApi from './fetchDataApi';

// function Private(props) {
//     return (
//         <Switch>
//              <Route path="/pengaturan" component={Pengaturan}/>
//              <Route path="/fetchDataApi" component={FetchDataApi}/>
//             <Route component={Home}/>
//         </Switch>
//     );
// }

// export default Private;
