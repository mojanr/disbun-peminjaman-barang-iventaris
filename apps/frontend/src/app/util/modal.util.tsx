import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx"

export const ModalUtilProps = {
  status: observable,
  open: action,
  close: action,
  isOpen: computed
}

export class ModalUtil {
  
  status = false

  constructor() {
    makeObservable(this, {
      ...ModalUtilProps
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