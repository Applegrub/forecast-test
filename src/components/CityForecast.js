import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfoDialog from "./InfoDialog";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 400,
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

    const temp = cityInfo.main.temp;
    return <div className={classes.root}>
        <ListItem button variant="outlined" onClick={handleClickOpen}>
            <ListItemText
                primary={cityInfo.name}
                secondary={`Temperature today: ${toCelsius(temp)} °C`}
            />
        </ListItem>
        <InfoDialog open={open} onClose={handleClose} cityInfo={cityInfo}/>
    </div>
}

export const toCelsius = (degris) => {
    const result = degris - 273;
    return result.toFixed(0);
}

export default CityForecast;