import React, {useState} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfoDialog from "../components/InfoDialog";



const ApolloCityForecast = (props) => {
    const {cityInfo} = props

    const [open, setOpen] = useState(false)

    const temp = cityInfo.oneDay?.main.temp;
    return <div>
        <ListItem button variant="outlined" onClick={()=>setOpen(true)}>
            <ListItemText
                primary={cityInfo.response?.name}
                secondary={`Temperature today: ${toCelsius(temp)} °C`}
            />
        </ListItem>
        <InfoDialog infoForDialog={cityInfo} open={open} onClose={()=>setOpen(false)}/>
    </div>
};

export const toCelsius = (degris) => {
    const result = degris - 273;
    return result.toFixed(0);
}

export default ApolloCityForecast;