import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  items = [1, 2, 3];

  get first() {
    return this.items.at(0);
  }

  get last() {
    return this.items.at(-1);
  }

  oldPush = () => {
    this.items.pushObject(this.items.length + 1);
  };

  push = () => {
    this.items.push(this.items.length + 1);
  };
}
