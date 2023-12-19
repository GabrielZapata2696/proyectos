import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private toggle: BehaviorSubject<boolean>;

  constructor() {
    this.toggle = new BehaviorSubject<boolean>(true);
  }

  public getToggleValue(): Observable<boolean> {
    return this.toggle.asObservable();
  }

  public changeToggleValue() {
    this.toggle.next(!this.toggle);
  }

}
