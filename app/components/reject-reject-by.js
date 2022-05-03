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
    {
      food: 'banana',
      isFruit: true,
    },
  ];

  get rejectFruit() {
    return this.items.reject((item) => item.isFruit).map((item) => item.food);
  }

  get rejectByFruit() {
    return this.items.rejectBy('isFruit').map((item) => item.food);
  }

  get filterNonFruit() {
    return this.items.filter((item) => !item.isFruit).map((item) => item.food);
  }
  oldPush = () => {
    this.items.pushObject({
      food: 'celery',
      isFruit: false,
    });
  };

  push = () => {
    this.items.push({
      food: 'celery',
      isFruit: false,
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
    {
      food: 'banana',
      isFruit: true,
    },
  ]);

  get rejectFruit() {
    return this.items.reject((item) => item.isFruit).map((item) => item.food);
  }

  get rejectByFruit() {
    return this.items.rejectBy('isFruit').map((item) => item.food);
  }

  get filterNonFruit() {
    return this.items.filter((item) => !item.isFruit).map((item) => item.food);
  }

  oldPush = () => {
    this.items.pushObject({
      food: 'celery',
      isFruit: false,
    });
  };

  push = () => {
    this.items.push({
      food: 'celery',
      isFruit: false,
    });
  };
}

export default class UniqComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
