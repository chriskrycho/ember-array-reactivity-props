import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [1, 2, 3];

  get anyLargerFour() {
    return this.items.any((item) => item > 4);
  }

  get someLargerFour() {
    return this.items.some((item) => item > 4);
  }

  get withoutFour() {
    return this.items.without(4);
  }

  get filterFour() {
    return this.items.filter((item) => item !== 4);
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

  get anyLargerFour() {
    return this.items.any((item) => item > 4);
  }

  get someLargerFour() {
    return this.items.some((item) => item > 4);
  }

  get withoutFour() {
    return this.items.without(4);
  }

  get filterFour() {
    return this.items.filter((item) => item !== 4);
  }
  oldPush = () => {
    this.items.pushObject(this.items.length + 1);
  };

  push = () => {
    this.items.push(this.items.length + 1);
  };
}

export default class AnyWithoutComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
