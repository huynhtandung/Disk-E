import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';
import PropTypes from 'prop-types';

function TaskList(props) {
	const { classes, tasks, status } = props;
	return (
		<Grid item md={4}
			xs={12} key={status.value}>
			<Box mt={2} mb={2}>
				<div className={classes.status}>{status.lable}</div>
			</Box>
			<div className={classes.wrapperListTask}>
				{tasks.map((task, index) => {
					return <TaskItem key={index} task={task}
						status={status} />;
				})}
			</div>
		</Grid>
	);
}
TaskList.propTypes = {
	classes: PropTypes.object,
	tasks: PropTypes.array,
	status: PropTypes.object
};
export default withStyles(styles)(TaskList);
