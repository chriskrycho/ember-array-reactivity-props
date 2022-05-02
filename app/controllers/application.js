import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked, TrackedArray } from 'tracked-built-ins';
export default class ApplicationController extends Controller {
  widgets = [
    {
      name: 'first-object-last-object',
      label: '(first|last)object, objectAt',
    },
    {
      name: 'any-without',
      label: 'any, without',
    },
    {
      name: 'filter-by-find-by',
      label: 'filterBy, findBy',
    },
  ];

  @tracked
  selectedWidget = this.widgets[0].name;

  @action
  onSelect(e) {
    this.selectedWidget = e.target.value;
  }
}
