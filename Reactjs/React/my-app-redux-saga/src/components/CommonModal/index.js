import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Proptypes from 'prop-types';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import * as modalActions from '../../action/modal';
import { Modal } from '@material-ui/core';

function CommonModal(props) {
    const {classes, title, open, component, commonModalActionCreator} = props;
    const {hideModal} = commonModalActionCreator;
	return (
        <Modal open={open} onClose={hideModal}>
            <div className={classes.modal}>
                <div className={classes.header}>
                    <span className={classes.title}>{title}</span>
                    <i className={`${classes.iconClose} material-icons`} onClick={hideModal}>
                        highlight_off
                    </i>
                </div>
                <div className={classes.content}>
                    {component}
                </div>
            </div>
        </Modal>
    );
}

CommonModal.propTypes = {
    classes : Proptypes.object,
    title : Proptypes.string,
    open : Proptypes.bool,
    component : Proptypes.object,
    commonModalActionCreator : Proptypes.shape({
        hideModal : Proptypes.func
    })
};

const mapStateToProps = state => ({
    title : state.modal.title,
    open : state.modal.showModal,
    component : state.modal.component
});

const mapDispatchToProps = dispatch => ({
    commonModalActionCreator : bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withStyles(styles),
    withConnect,
)(CommonModal);
