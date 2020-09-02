import {action, computed, observable, decorate} from "mobx";


export default class DialogStore {
    constructor() {
        this.open = false;
    }

    get isOpen() {
        return this.open
    }

    addInfo(props) {
        this.info = props
    }

    closeDialog() {
        this.open = false;
    }

    openDialog() {
        this.open = true;
    }
}
decorate(DialogStore, {
    open: observable,
    isOpen: computed,
    closeDialog: action,
    openDialog: action,
})

export const dialogStore = new DialogStore()

