import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [
    {
      food: 'apple',
    },
    {
      food: 'beans',
    },
    {
      food: 'apple',
    },
  ];

  get uniqByApple() {
    return this.items.uniqBy('food').map((item) => item.food);
  }

  get uniqItemsApple() {
    const seen = new Set();
    const newArray = [];
    this.items.forEach((item) => {
      if (!seen.has(item.food)) {
        seen.add(item.food);
        newArray.push(item);
      }
    });
    return newArray.map((item) => item.food);
  }

  get mapByFood() {
    return this.items.mapBy('food');
  }

  get mapFood() {
    return this.items.map((item) => item.food);
  }
  oldPush = () => {
    this.items.pushObject({
      food: 'banana',
    });
  };

  push = () => {
    this.items.push({
      food: 'banana',
    });
  };
}

class Tracked {
  items = new TrackedArray([
    {
      food: 'apple',
    },
    {
      food: 'beans',
    },
    {
      food: 'apple',
    },
  ]);

  get uniqByApple() {
    return this.items.uniqBy('food').map((item) => item.food);
  }

  get uniqItemsApple() {
    const seen = new Set();
    const newArray = [];
    this.items.forEach((item) => {
      if (!seen.has(item.food)) {
        seen.add(item.food);
        newArray.push(item);
      }
    });
    return newArray.map((item) => item.food);
  }

  get mapByFood() {
    return this.items.mapBy('food');
  }

  get mapFood() {
    return this.items.map((item) => item.food);
  }
  oldPush = () => {
    this.items.pushObject({
      food: 'banana',
    });
  };

  push = () => {
    this.items.push({
      food: 'banana',
    });
  };
}

export default class UniqByMapByComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
