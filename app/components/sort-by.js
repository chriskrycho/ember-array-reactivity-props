import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';
import sortBy from 'lodash-es/sortBy';

class Untracked {
  items = [
    { name: 'red', weight: 500 },
    { name: 'green', weight: 600 },
    { name: 'blue', weight: 500 },
  ];

  get sortByWeightName() {
    return this.items.sortBy('weight', 'name').map((item) => item.name);
  }

  get lodashSortWeightName() {
    return sortBy(this.items, ['weight'], 'name').map((item) => item.name);
  }

  oldPush = () => {
    this.items.pushObject({
      name: 'yellow',
      weight: 700,
    });
  };

  push = () => {
    this.items.push({
      name: 'yellow',
      weight: 700,
    });
  };
}

class Tracked {
  items = new TrackedArray([
    { name: 'red', weight: 500 },
    { name: 'green', weight: 600 },
    { name: 'blue', weight: 500 },
  ]);

  get sortByWeightName() {
    return this.items.sortBy('weight', 'name').map((item) => item.name);
  }

  get lodashSortWeightName() {
    return sortBy(this.items, ['weight'], 'name').map((item) => item.name);
  }

  oldPush = () => {
    this.items.pushObject({
      name: 'yellow',
      weight: 700,
    });
  };

  push = () => {
    this.items.push({
      name: 'yellow',
      weight: 700,
    });
  };
}

export default class sortByComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
