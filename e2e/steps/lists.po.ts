import {browser, by, element, protractor, ElementFinder, ElementArrayFinder} from 'protractor';


export class ListsPage {

  navigateTo() {
    return browser.get('/');
  }

  selectListOneInput(): ElementFinder  {
    return element(by.e2eLocator('todo1')).element(by.css('input')) ;
  }

  selectListTwoInput(): ElementFinder  {
    return element(by.e2eLocator('todo2')).element(by.css('input')) ;
  }

  inputTodoListOne(value: string) {
    const input = this.selectListOneInput();
    return input.sendKeys(value);
  }

  enterTodoListOne() {
    const input = this.selectListOneInput();
    return input.sendKeys(protractor.Key.ENTER);
  }

  inputTodoListTwo(value: string) {
    const input = this.selectListTwoInput();
    return input.sendKeys(value);
  }

  enterTodoListTwo() {
    const input = this.selectListTwoInput();
    return input.sendKeys(protractor.Key.ENTER);
  }

  getTodoListOne(): ElementArrayFinder {
    return element(by.e2eLocator('todo1')).all(by.css('.todo-list li')) ;
  }

  getTodoListOneByIndex(index: number): ElementFinder {
    return this.getTodoListOne().get(index).element(by.css('input'));
  }

  getTodoListTwo(): ElementArrayFinder {
    return element(by.e2eLocator('todo2')).all(by.css('.todo-list li')) ;
  }

  getTodoListTwoByIndex(index: number): ElementFinder {
    return this.getTodoListTwo().get(index).element(by.css('input'));
  }
}
