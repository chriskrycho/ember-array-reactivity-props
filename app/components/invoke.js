import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

class People {
  name;

  constructor(name) {
    this.name = name;
  }

  greet(prefix = 'Hello') {
    return `${prefix} ${this.name}`;
  }
}

class Untracked {
  items = [new People('Tom'), new People('Joe')];

  get invokeGreet() {
    return this.items.invoke('greet');
  }

  get mapGreet() {
    return this.items.map((item) => item['greet']());
  }

  oldPush = () => {
    this.items.pushObject(new People('Json'));
  };

  push = () => {
    this.items.push(new People('Json'));
  };
}

class Tracked {
  items = new TrackedArray([new People('Tom'), new People('Joe')]);

  get invokeGreet() {
    return this.items.invoke('greet');
  }

  get mapGreet() {
    return this.items.map((item) => item['greet']());
  }

  oldPush = () => {
    this.items.pushObject(new People('Json'));
  };

  push = () => {
    this.items.push(new People('Json'));
  };
}

export default class InvokeComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
