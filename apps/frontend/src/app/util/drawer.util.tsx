import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx"

const DrawerUtilProps = {
  status: observable,
  open: action,
  close: action,
  isOpen: computed
}

export class DrawerUtil {
  
  status = false

  constructor() {
    makeObservable(this, {
      ...DrawerUtilProps
    })
  }

  open() {
    this.status = true
  }

  close() {
    this.status = false
  }

  get isOpen() {
    return this.status
  }

}