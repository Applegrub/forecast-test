import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "@emotion/styled";
import DialogContent from "@material-ui/core/DialogContent";
import {useObserver} from 'mobx-react'
import {useStores} from "../hooks/use-stores";
import OneDayForecast from "./OneDayForecast";

const Title = styled.div`
padding: 16px 24px;
text-align: center;
font-size: 30px;
@media screen and (max-width: 600px){
font-size: 20px;
}
`
const Info = styled.div`
`


const InfoDialog = ({infoForDialog}) => {
    const {dialogStore} = useStores()
    const handleClose = () => {
        dialogStore.closeDialog()
    };

    const info = infoForDialog.threeDays
    return useObserver(() => (<Dialog onClose={handleClose} open={dialogStore.isOpen}>
            <Title>More about weather</Title>
            <DialogContent>
                <Info>
                    <OneDayForecast day={info.daily[1]}/>
                    <OneDayForecast day={info.daily[2]}/>
                    <OneDayForecast day={info.daily[3]}/>
                </Info>
            </DialogContent>
        </Dialog>
    ));
}

export default InfoDialog;