import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = ['a', null, 'c', undefined];

  get compacted() {
    return this.items.compact();
  }

  get filterNulls() {
    return this.items.filter((item) => item !== null && item !== undefined);
  }

  oldPush = () => {
    this.items.pushObject(this.items.length - 1);
  };

  push = () => {
    this.items.pushObject(this.items.length - 1);
  };
}

class Tracked {
  items = new TrackedArray(['a', null, 'c', undefined]);

  get compacted() {
    return this.items.compact();
  }

  get filterNulls() {
    return this.items.filter((item) => item !== null && item !== undefined);
  }

  oldPush = () => {
    this.items.pushObject(this.items.length - 1);
  };

  push = () => {
    this.items.pushObject(this.items.length - 1);
  };
}

export default class sortByComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
