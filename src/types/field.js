'use strict';
import {Elem} from './_elem';
import {isString} from '../validators';
import {AttributeMixin} from './mixins';

const defaultProperties = {
	_nodeType: 'data',
	label: null,
	stringTemplate: null
};

export class Field extends Elem {

	constructor(properties = {}) {
		
		super();

		Object.assign(this, AttributeMixin, defaultProperties, properties);

		this.extendValidation({
			label: isString,
			stringTemplate: isString,
			type: isString
		});
	}
}
