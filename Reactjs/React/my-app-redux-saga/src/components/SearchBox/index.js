import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';

function SearchBox(props) {
    const {handleChange} = props;
	return (
        <div>
            <TextField
                autoComplete='off'
                id="standard-dense"
                label="Enter keyword to search"
                margin="dense"
                onChange={handleChange}
            />
        </div>
    );
}
SearchBox.propTypes = {
    handleChange : Proptypes.func
};
const mapStateToProps = state =>{
    return{

    };
};

const mapDispatchToProps = dispatch =>{
    return{

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
)(SearchBox);
