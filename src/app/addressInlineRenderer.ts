import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {AddressInlineModel} from './addressInlineModel';

@Component({
    selector: 'address-inline-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" class="form-control form-control-sm plain-input text-muted" [(ng-model)]="model.content">
    `
})
export class AddressInlineRenderer {
    @Input() model : AddressInlineModel;
}
