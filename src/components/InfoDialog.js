import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "@emotion/styled";
import DialogContent from "@material-ui/core/DialogContent";
import OneDayForecast from "./OneDayForecast";

const Title = styled.div`
padding: 16px 24px;
text-align: center;
font-size: 30px;
@media screen and (max-width: 600px){
font-size: 20px;
}
`


const InfoDialog = ({infoForDialog, open, onClose}) => {

    const info = infoForDialog.threeDays

    return <Dialog onClose={onClose} open={open}>
            <Title>More about weather</Title>
            <DialogContent>
                <div>
                    <OneDayForecast day={info.daily[1]}/>
                    <OneDayForecast day={info.daily[2]}/>
                    <OneDayForecast day={info.daily[3]}/>
                </div>
            </DialogContent>
        </Dialog>
}

export default InfoDialog;