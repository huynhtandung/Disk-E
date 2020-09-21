import React from 'react';
//import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard/index';
import CommonModal from '../../components/CommonModal';
import theme from './../../commons/Theme';
import {Provider} from 'react-redux';
import configStore from '../../redux/configStore';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configStore();

function App() {
	return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ToastContainer />
                <GlobalLoading />
                <CommonModal />
                <Taskboard />
            </ThemeProvider>
        </Provider>
	);
}

export default withStyles(styles)(App);
