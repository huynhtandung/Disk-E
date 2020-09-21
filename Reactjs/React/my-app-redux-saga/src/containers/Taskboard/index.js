import React, {useEffect} from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import theme from './../../commons/Theme';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import Button from '@material-ui/core/Button';
import TaskForm from '../../components/TaskForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './../../action/task';
import SearchBox from '../../components/SearchBox';
import * as modalActions from './../../action/modal';
/*const listTask = [
	{
		id: 1,
		title: 'Read book',
		description: 'Read material ui book',
		status: 0
	},
	{
		id: 2,
		title: 'Play football',
		description: 'Play football with the friends',
		status: 1
	},
	{
		id: 3,
		title: 'Relax',
		description: 'Play game',
		status: 2
	},
	{
		id: 4,
		title: 'School',
		description: 'Go to school',
		status: 1
	}
];*/

function Taskboard(props) {
    //const [/*open,*/ setOpen] = React.useState(false);

	const { classes } = props;
    //props cho fetchListTask

    const {taskActionCreator} = props;
    const {fetchListTask} = taskActionCreator;

    //react Hooks
	useEffect(() => {
		fetchListTask();
	}, [fetchListTask]);
    //fetchListTaskRequest();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.taskBoard}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => openForm()}
				>
					<AddIcon />
					Thêm mới công việc
				</Button>
                <Button
					variant="contained"
					color="primary"
					className={classes.button}
                    onClick={() => loadData()}
                    style={{
                        marginLeft : 20
                    }}
				>
					Load Data
				</Button>
                {renderSearchBox()}
				{renderBoard()}
			</div>
		</ThemeProvider>
	);

	function openForm() {
        //setOpen(true);
        //fetchListTaskRequest();
        const {modalActions, taskActionCreator} = props;
        const {showModal, changeModalTitle, changeModalContent} = modalActions;
        const {editTask, setTaskEditting} = taskActionCreator;
        setTaskEditting(null);
        showModal();
        changeModalTitle('Them moi cong viec');
        changeModalContent(<TaskForm />);
    }
    function loadData(){
        /*const {taskActionCreator} = props;
        const {fetchListTask} = taskActionCreator;

        //react Hooks
       // useEffect(() => {
            fetchListTask();*/
        //}, [fetchListTask]);
    }

	/*function handleClose() {
		setOpen(false);
	}*/
	function renderBoard() {
        const {listTask} = props;
		let xhtml = null;
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map((status, index) => {
					const taskFiltered = listTask.filter(
						task => task.status === status.value
					);
					return <TaskList key={index} tasks={taskFiltered}
						status={status} />;
				})}
			</Grid>
		);
		return xhtml;
	}
	/*function renderForm() {
		let xhtml = null;
		xhtml = <TaskForm open={open} onClose={() => handleClose()} theme={theme} />;
		return xhtml;
    }*/
    function renderSearchBox(){
        let xhtml = null;
        xhtml = (
            <SearchBox
                handleChange = {handleFilter}
            />
        );
        return xhtml;
    }

    function handleFilter(e){
        const {value} = e.target;
        const {taskActionCreator} = props;
        const {filterTask} = taskActionCreator;
        //dispatch action filterTask
        filterTask(value);
    }

}
Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionCreator : PropTypes.shape({
        fetchListTask : PropTypes.func,
        filterTask : PropTypes.func,
        editTask : PropTypes.func,
        setTaskEditting : PropTypes.func
    }),
    listTask : PropTypes.array,
    modalActions : PropTypes.shape({
        showModal : PropTypes.func,
        hideModal : PropTypes.func,
        changeModalTitle : PropTypes.func,
        changeModalContent : PropTypes.func
    })
};

const mapStateToProps = state => {
    return{
        listTask : state.task.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return{
        taskActionCreator : bindActionCreators(taskActions, dispatch),
        modalActions : bindActionCreators(modalActions, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));
