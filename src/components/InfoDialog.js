import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function InfoDialog(props) {

    const { onClose, open } = props;

    const handleClose = () => {
        onClose(open);
    };

    return (
        <Dialog onClose={handleClose}  open={open}>
            <DialogTitle >More about weather</DialogTitle>
        </Dialog>
    );
}

export default InfoDialog;