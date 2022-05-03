import Component from '@glimmer/component';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [
    {
      food: 'apple',
      isFruit: true,
    },
    {
      food: 'strawberry',
      isFruit: true,
    },
    {
      food: 'banana',
      isFruit: true,
    },
  ];

  get isEveryFruit() {
    return this.items.isEvery('isFruit');
  }

  get everyFruit() {
    return this.items.every((item) => item.isFruit);
  }

  get isAnyVeggie() {
    return this.items.isAny('isVeggie');
  }

  get anyVeggie() {
    return this.items.any((item) => item.isVeggie);
  }

  oldPush = () => {
    this.items.pushObject({
      food: 'celery',
      isVeggie: true,
    });
  };

  push = () => {
    this.items.pushObject({
      food: 'celery',
      isVeggie: true,
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
      food: 'strawberry',
      isFruit: true,
    },
    {
      food: 'banana',
      isFruit: true,
    },
  ]);

  get isEveryFruit() {
    return this.items.isEvery('isFruit');
  }

  get everyFruit() {
    return this.items.every((item) => item.isFruit);
  }

  get isAnyVeggie() {
    return this.items.isAny('isVeggie');
  }

  get anyVeggie() {
    return this.items.any((item) => item.isVeggie);
  }

  oldPush = () => {
    this.items.pushObject({
      food: 'celery',
      isVeggie: true,
    });
  };

  push = () => {
    this.items.pushObject({
      food: 'celery',
      isVeggie: true,
    });
  };
}

export default class UniqComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
