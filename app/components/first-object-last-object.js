import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [1, 2, 3];

  get first() {
    return this.items.at(0);
  }

  get last() {
    return this.items.at(-1);
  }

  get firstObjectAt() {
    return this.items.objectAt(0);
  }

  get lastObjectAt() {
    return this.items.objectAt(this.items.length - 1);
  }

  get objectsAt() {
    return this.items.objectsAt([
      this.items.length - 1,
      this.items.length - 2,
      this.items.length - 3,
    ]);
  }

  get objectsAtEqu() {
    return [
      this.items.length - 1,
      this.items.length - 2,
      this.items.length - 3,
    ].map((index) => this.items[index]);
  }

  oldPush = () => {
    this.items.pushObject(this.items.length + 1);
  };

  oldUnshift = () => {
    this.items.unshiftObject(this.items.length + 1);
  };

  push = () => {
    this.items.push(this.items.length + 1);
  };

  unshift = () => {
    this.items.unshift(this.items.length + 1);
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

  get firstObjectAt() {
    return this.items.objectAt(0);
  }

  get lastObjectAt() {
    return this.items.objectAt(this.items.length - 1);
  }

  get objectsAt() {
    return this.items.objectsAt([
      this.items.length - 1,
      this.items.length - 2,
      this.items.length - 3,
    ]);
  }

  get objectsAtEqu() {
    return [
      this.items.length - 1,
      this.items.length - 2,
      this.items.length - 3,
    ].map((index) => this.items[index]);
  }

  oldPush = () => {
    this.items.pushObject(this.items.length + 1);
  };

  oldUnshift = () => {
    this.items.unshiftObject(this.items.length + 1);
  };

  push = () => {
    this.items.push(this.items.length + 1);
  };

  unshift = () => {
    this.items.unshift(this.items.length + 1);
  };
}

export default class FirstObjectLastObjectComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
