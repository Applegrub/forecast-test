import {action, computed, observable, decorate} from "mobx";


export default class DialogStore {
    constructor() {
        this.open = false;
        this.info = {
            daily: [{}, {dt: '', temp: 0, weather: [{main: "", description: "", icon: ""}]},
                {dt: '', temp: 0, weather: [{main: "", description: "", icon: ""}]},
                {dt: '', temp: 0, weather: [{main: "", description: "", icon: ""}]}]
        }
    }

    get isOpen() {
        return this.open
    }

    get getinfo() {
        return this.info
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

