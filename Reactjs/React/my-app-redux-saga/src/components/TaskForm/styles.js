const styles = theme =>({
    textField : {
        display : 'flex',
        backgroundColor: 'white',
    },
    modal : {
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        //border: '2px solid #000',
        boxShadow: theme.shadows[5],
        //padding: theme.spacing(2, 4, 4),
        outline: 'none',
        //backgroundColor: '#e3f2fd',
    },
    title : {
        color: 'white',
        fontSize : '20px'
    },
    header :{
        backgroundColor: theme.color.primary,
        color : 'white',
        padding : theme.spacing(2),
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    content:{
        padding: theme.spacing(3)
    },
    iconClose:{
        cursor : 'pointer',
        fontSize : '30px'
    }
});

export default styles;
