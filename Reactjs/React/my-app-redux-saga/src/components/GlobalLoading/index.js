import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Proptypes from 'prop-types';
import Loading from './../../assets/images/loading.gif';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import * as uiActions from './../../action/ui';

function GlobalLoading(props) {
    const {classes, showLoading} = props;
    let xhtml = null;
    if(showLoading){
        xhtml = (
            <div className={classes.globalLoading}>
                <img
                    alt='dasd'
                    src={Loading}
                    className={classes.icon}
                />
            </div>
        );
    }
	return xhtml;
}
GlobalLoading.propTypes = {
    classes: Proptypes.object,
    showLoading : Proptypes.bool,
};
const mapStateToProps = state =>{
    return{
        showLoading : state.ui.showLoading,
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        uiActions : bindActionCreators(uiActions, dispatch),
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
//export default withStyles(styles)(GlobalLoading);

export default compose(
    withStyles(styles),
    withConnect,
)(GlobalLoading);
