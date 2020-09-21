import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './../../action/task';
import * as modalActions from '../../action/modal';
import TaskForm from './../TaskForm/index';

function TaskItem(props) {
    const { classes, task, status, taskActionCreator, commonModalActionCreator } = props;
    const { editTask, setTaskEditting } = taskActionCreator;
    const { showModal, changeModalTitle, changeModalContent} = commonModalActionCreator;
    function clickEdit(task){
        //editTask(task);
        setTaskEditting(task);
        showModal();
        changeModalTitle('Sua cong viec');
        changeModalContent(<TaskForm />);
    };
	return (
		<Card key={task.id} className={classes.card}>
			<CardContent>
				<Grid container justify="space-between">
					<Grid item md={8}>
						<b>{task.title}</b>
					</Grid>
					<Grid item md={4}>
						{status.lable}
					</Grid>
				</Grid>
				<p>{task.description}</p>
			</CardContent>
			<CardActions className={classes.cardAction}>
				<Fab
					color="primary"
					aria-label="Delete"
					size="small"
                    className={classes.fab}
                    onClick={()=>clickEdit(task)}
				>
					<Icon fontSize="small">edit_icon</Icon>
				</Fab>
				<Fab
					color="primary"
					aria-label="Delete"
					size="small"
					className={classes.fab}
				>
					<Icon fontSize="small">delete_icon</Icon>
				</Fab>
			</CardActions>
		</Card>
	);
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.object,
    status: PropTypes.object,
    taskActionCreator : PropTypes.shape({
        editTask : PropTypes.func,
        setTaskEditting : PropTypes.func
    }),
    commonModalActionCreator : PropTypes.shape({
        showModal : PropTypes.func,
        changeModalTitle : PropTypes.func,
        changeModalContent : PropTypes.func
    })
};

const mapStateToProps = state => {

};
const mapDispatchToProps = dispatch => {
    return{
        taskActionCreator : bindActionCreators(taskActions, dispatch),
        commonModalActionCreator : bindActionCreators(modalActions, dispatch),
    };
};
export default withStyles(styles)(connect(null, mapDispatchToProps)(TaskItem));
