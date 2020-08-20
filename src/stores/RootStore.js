import DialogStore from "./DialogStore";

export class RootStore {


    constructor(initState) {
        this.dialogStore = new DialogStore(
            this,
            initState && initState.dialogStore ? initState.dialogStore : null
        );
    }
     serialize = () => ({
         dialogStore: {}
    });
}