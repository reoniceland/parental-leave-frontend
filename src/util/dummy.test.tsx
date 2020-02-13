import { sum } from './dummy';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('basic PI', () => {
  expect(sum(1, 2, Math.PI)).toBe(3+Math.PI);
});
