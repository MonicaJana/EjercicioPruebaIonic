import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public currentInput: string = '';
  public result: string = '';

  appendToInput(value: string) {
    this.currentInput += value;
  }

  calculate() {
    try {
      this.result = eval(this.currentInput).toString();
    } catch (e) {
      this.result = 'Error';
    }
  }

  clear() {
    this.currentInput = '';
    this.result = '';
  }

}
