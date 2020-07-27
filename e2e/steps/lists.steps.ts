import {Before, Given, After} from 'cucumber'
import {browser, protractor} from 'protractor';
import {Then} from 'cucumber'
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {ListsPage} from './lists.po';


const page = new ListsPage();
const expect = chai.expect;

Before(() => {
  chai.use(chaiAsPromised);
});

After(function(scenario, callback) {
  const world = this;
  browser.takeScreenshot().then((buffer) => {
    return world.attach(buffer, 'image/png');
  }).then(() => {
    callback();
  })
});

Given(/^User visits the todos page$/, async function() {
  await page.navigateTo();
});

Given(/^The todoOne input is set to "([^"]*)"$/, function(inputVal: string) {
  return page.inputTodoListOne(inputVal);
});

Given(/^User hits enter on list todoOne$/, async function() {
  await page.enterTodoListOne();
});

Then(/^The todoOne input value should be "([^"]*)"$/, function(inputVal: string, callback) {
  const field = page.selectListOneInput();
  expect(field.getAttribute('value')).to.eventually.equal(inputVal)
                                     .and.notify(callback);
});

Then(/^The number "([^"]*)" on todoOne has value "([^"]*)"$/, function(numberVal: number, inputVal: string, callback) {
  const todo = page.getTodoListOneByIndex(numberVal);
  expect(todo.getAttribute('value')).to.eventually.equal(inputVal)
                                     .and.notify(callback);
});

Then(/^The number "([^"]*)" on todoTwo has value "([^"]*)"$/, function(numberVal: number, inputVal: string, callback) {
  const todo = page.getTodoListTwoByIndex(numberVal);
  expect(todo.getAttribute('value')).to.eventually.equal(inputVal)
                                    .and.notify(callback);
});
