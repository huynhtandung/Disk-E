import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../action/modal';
import renderTextField from '../FormHelper/TextField';
import styles from './styles';
import validate from './validate';
import * as taskActions from '../../action/task';

function TaskForm(props) {
    const { classes, commonModalActionCreator, handleSubmit, invalid, submitting, taskEditting } = props;
    const {hideModal} = commonModalActionCreator;

    function handleSubmitForm(data){
        const {taskActionsCreator} = props;
        const {addTask, editTask} = taskActionsCreator;
        const {title, description} = data;

        if(taskEditting === null)
            addTask(title, description);
        else
            editTask(data);
    };

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Field  id='title' label='Tieu de'
                            className={classes.title}
                            name='title'
                            component={renderTextField}
                            /*validate={[required, minLength5]}*/
                            value={taskEditting ? taskEditting.title : ''}

                    />
                </Grid>
                <Grid item md={12}>
                    <Field  id='description' label='Mo ta'
                        className={classes.desc}
                        name='description'
                        component={renderTextField}
                        multiline
                        rowsMax='2'
                        value={taskEditting ? taskEditting.description : ''}
                    />
                </Grid>
                <Grid item md={12}>
                    <Box display="flex" justifyContent="flex-end" mt={1}>
                        <Box mr={1}>
                            <Button disabled={invalid || submitting} color='primary' variant="contained" type='submit'>
                                &nbsp;Save&nbsp;
                            </Button>
                        </Box>
                        <Button onClick={hideModal} variant="contained">
                            Canclel
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
	);
}
TaskForm.propTypes = {
    classes: Proptypes.object,
    commonModalActionCreator : Proptypes.shape({
        hideModal : Proptypes.func
    }),
    handleSubmit : Proptypes.func,
    invalid : Proptypes.bool,
    submitting : Proptypes.bool,
    taskActionsCreator : Proptypes.shape({
        addTask : Proptypes.func,
        editTask : Proptypes.func
    }),
    taskEditting : Proptypes.object
};
const mapStateToProps = state => ({
    taskEditting : state.task.taskEditting,
    initialValues : state.task.taskEditting,
});
const mapDispatchToProps = dispatch => ({
    commonModalActionCreator : bindActionCreators(modalActions, dispatch),
    taskActionsCreator : bindActionCreators(taskActions, dispatch)
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

const withReduxForm = reduxForm({
    form :'TASK_MANAGEMENT',
    validate
});

/*function required(value){
    let error = 'Vui long nhap lai';
    if(value !== null &&typeof value !== 'undefined' && value.trim() !== '')
        error = null;
    return error;
};

function minLength5(value){
    let error = 'Vui long nhap tren 5 ky tu';
    if(value.length >= 5)
        error = null;
    return error;
}*/

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm);
