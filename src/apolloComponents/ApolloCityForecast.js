import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useObserver} from 'mobx-react'
import {useStores} from "../hooks/use-stores";
import InfoDialog from "../components/InfoDialog";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

const ApolloCityForecast = (props) => {
    const {cityInfo} = props
    const classes = useStyles();
    const {dialogStore} = useStores()
    function handleClickOpen() {
        dialogStore.openDialog()
    }
    const temp = cityInfo.oneDay?.main.temp;
    return useObserver(() => (<div className={classes.root}>
        <ListItem button variant="outlined" onClick={handleClickOpen}>
            <ListItemText
                primary={cityInfo.response?.name}
                secondary={`Temperature today: ${toCelsius(temp)} °C`}
            />
        </ListItem>
        <InfoDialog infoForDialog={cityInfo}/>
    </div>))
};

export const toCelsius = (degris) => {
    const result = degris - 273;
    return result.toFixed(0);
}

export default ApolloCityForecast;