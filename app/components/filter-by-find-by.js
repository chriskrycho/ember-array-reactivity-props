import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [
    {
      food: 'apple',
      isFruit: true,
    },
    {
      food: 'beans',
      isFruit: false,
    },
  ];

  get filterByFruit() {
    return this.items.filterBy('isFruit').map((item) => item.food);
  }

  get filterFruit() {
    return this.items.filter((item) => item.isFruit).map((item) => item.food);
  }

  get findByYellow() {
    return this.items.findBy('isYellow')?.food;
  }

  get findYellow() {
    return this.items.find((item) => item.isYellow)?.food;
  }

  oldPush = () => {
    this.items.pushObject({
      food: 'banana',
      isFruit: true,
      isYellow: true,
    });
  };

  push = () => {
    this.items.push({
      food: 'banana',
      isFruit: true,
      isYellow: true,
    });
  };
}

class Tracked {
  items = new TrackedArray([
    {
      food: 'apple',
      isFruit: true,
    },
    {
      food: 'beans',
      isFruit: false,
    },
  ]);

  get filterByFruit() {
    return this.items.filterBy('isFruit').map((item) => item.food);
  }

  get filterFruit() {
    return this.items.filter((item) => item.isFruit).map((item) => item.food);
  }
  get findByYellow() {
    return this.items.findBy('isYellow')?.food;
  }

  get findYellow() {
    return this.items.find((item) => item.isYellow)?.food;
  }
  oldPush = () => {
    this.items.pushObject({
      food: 'banana',
      isFruit: true,
      isYellow: true,
    });
  };

  push = () => {
    this.items.push({
      food: 'banana',
      isFruit: true,
      isYellow: true,
    });
  };
}

export default class FilterByComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
