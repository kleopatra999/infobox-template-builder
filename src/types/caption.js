'use strict';
import {Elem} from './_elem';

const defaultProperties = {
	_nodeType: 'caption',
	stringTemplate: null
};

export class Caption extends Elem {

	constructor(properties = {}) {
		super();
		Object.assign(this, defaultProperties, properties);

		this.extendValidation({
			stringTemplate: isString
		});
	}
}
