import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

class Untracked {
  items = [{ name: 'Joe' }, { name: 'Matt' }];

  setEachZipcode = () => {
    this.items.setEach('zipCode', '10011');
  };

  nativeSetEachZipcode = () => {
    this.items.forEach((item) => {
      item.zipCode = '10011';
    });
  };

  oldPush = () => {
    this.items.pushObject({
      name: 'Jason',
    });
  };

  push = () => {
    this.items.push({
      name: 'Jason',
    });
  };
}

class People {
  name;
  @tracked zipCode;
  constructor({ name, zipCode }) {
    this.name = name;
    this.zipCode = zipCode;
  }
}
class Tracked {
  items = new TrackedArray([
    new People({ name: 'Joe' }),
    new People({ name: 'Matt' }),
  ]);

  setEachZipcode = () => {
    this.items.setEach('zipCode', '10011');
  };

  nativeSetEachZipcode = () => {
    this.items.forEach((item) => {
      item.zipCode = '10011';
    });
  };

  oldPush = () => {
    this.items.pushObject(new People({ name: 'Jason' }));
  };

  push = () => {
    this.items.push(new People({ name: 'Jason' }));
  };
}

export default class SetEachComponent extends Component {
  untracked = new Untracked();
  tracked = new Tracked();
}
