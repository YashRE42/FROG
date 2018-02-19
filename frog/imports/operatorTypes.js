// @flow

import { type operatorPackageT, flattenOne } from 'frog-utils';

import { keyBy } from 'lodash';

export const operatorTypes: operatorPackageT[] = flattenOne([]).map(x =>
  Object.freeze(x)
);

// somehow lodash.keyBy has the type {[id]: ??}, which means that the object can be null
// this means it will not fit in the type we want, and give us flow errors whenever
// we try to extract an operator in a function, without checking if it's null
// since we know that it will never be null, we use this way of forcing it to be
// the right type. Not super elegant, would be better if there was another way.
export const operatorTypesObj: { [opType: string]: operatorPackageT } = (keyBy(
  operatorTypes,
  'id'
): any);
