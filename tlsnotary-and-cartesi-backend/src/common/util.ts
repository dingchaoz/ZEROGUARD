import { all, create } from 'mathjs';

// const config = {
//   number: 'BigNumber',
// };

const math = create(all);

export const Util = {
  printObject,
  enum: {
    getNumberValues(enumType: Record<any, any>): number[] {
      const values: number[] = [];
      const keys = Object.keys(enumType);
      for (const key of keys.slice(0, keys.length / 2)) {
        values.push(+key as number);
      }
      return values;
    },
  },
  math,
};

function printObject(data: Record<any, any>) {
  return JSON.stringify(data, null, 2);
}
