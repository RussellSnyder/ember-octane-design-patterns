import { helper } from '@ember/component/helper';

export function arraySplit(params/*, hash*/) {
  if (!params[0] || !params[1]) { return null; }

  return params[0].split(params[1]);
}

export default helper(arraySplit);
