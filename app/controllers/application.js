import Controller from '@ember/controller';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
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

class Tracked {
  items = new TrackedArray([1, 2, 3]);

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

export default class ApplicationController extends Controller {
  untracked = new Untracked();
  tracked = new Tracked();
}
