import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from 'tracked-built-ins';
export default class ApplicationController extends Controller {
  queryParams = ['widgetId'];

  @tracked
  widgetId;

  widgets = [
    {
      name: 'first-object-last-object',
      label: '(first|last)object, objectAt, objectsAt',
    },
    {
      name: 'any-without',
      label: 'any, without',
    },
    {
      name: 'filter-by-find-by',
      label: 'filterBy, findBy',
    },
    {
      name: 'uniq-toArray',
      label: 'uniq, toArray',
    },
    {
      name: 'reject-reject-by',
      label: 'reject, rejectBy',
    },
    {
      name: 'is-every-is-any',
      label: 'isEvery, isAny',
    },
    {
      name: 'uniq-by-map-by',
      label: 'uniqBy, mapBy',
    },
    {
      name: 'sort-by',
      label: 'sortBy',
    },
    {
      name: 'compact',
      label: 'compact',
    },
  ];

  get selectedWidget() {
    return this.widgets.find(
      (widget) => widget.name === (this.widgetId || this.widgets[0].name)
    );
  }

  @action
  onSelect(e) {
    this.widgetId = e.target.value;
  }
}
