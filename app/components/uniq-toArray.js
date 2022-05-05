import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [1, 2, 3];

  get uniq() {
    return this.items.uniq();
  }

  get arrayWithSet() {
    return [...new Set(this.items)];
  }
  get toArrayList() {
    return this.items.toArray();
  }

  get arraySpread() {
    return [...this.items];
  }
  oldPush = () => {
    this.items.pushObject(this.items.length - 2);
  };

  push = () => {
    this.items.push(this.items.length - 2);
  };
}

class Tracked {
  items = new TrackedArray([1, 2, 3]);

  get uniq() {
    return this.items.uniq();
  }

  get arrayWithSet() {
    return [...new Set(this.items)];
  }

  get toArrayList() {
    return this.items.toArray();
  }

  get arraySpread() {
    return [...this.items];
  }
  oldPush = () => {
    this.items.pushObject(this.items.length - 2);
  };

  push = () => {
    this.items.push(this.items.length - 2);
  };
}

export default class UniqComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
