import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfoDialog from "./InfoDialog";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.info.light,
    },
}));



function CityForecast(props) {
    const classes = useStyles();
    const {cityInfo} = props
    const [open, setOpen] = useState(false);

    const handleClose = (value) => {
        setOpen(false);
    };

    function handleClickOpen() {
        setOpen(true);
    }

    return <div className={classes.root}>
        <ListItem button variant="outlined" color="primary" onClick={handleClickOpen}>
            <ListItemText primary={cityInfo.name} />
            {console.log(cityInfo.name)}
        </ListItem>
        <InfoDialog open={open} onClose={handleClose}/>
    </div>
}

export default CityForecast;