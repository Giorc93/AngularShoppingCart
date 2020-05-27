import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'  //Listening and triggering mechanism will be implemented by the Subject itself. ¡Check the RXJS page to understand the subject function! 

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product) {  //Setting the product as an argument, that means the product thats being clicked, where the function its being triggered is the product that's gonna be sended as message
    console.log(product)
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()  //Anyone who call the getMsg function will observe what it's being triggered on the sendMsg()   
  }
}
