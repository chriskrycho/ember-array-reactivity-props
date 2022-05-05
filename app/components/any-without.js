import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [1, 2, 3];

  get anyLargerSix() {
    return this.items.any((item) => item > 6);
  }

  get someLargerSix() {
    return this.items.some((item) => item > 6);
  }

  get withoutSix() {
    return this.items.without(6);
  }

  get filterSix() {
    return this.items.filter((item) => item !== 6);
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

  get anyLargerSix() {
    return this.items.any((item) => item > 6);
  }

  get someLargerSix() {
    return this.items.some((item) => item > 6);
  }

  get withoutSix() {
    return this.items.without(6);
  }

  get filterSix() {
    return this.items.filter((item) => item !== 6);
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
