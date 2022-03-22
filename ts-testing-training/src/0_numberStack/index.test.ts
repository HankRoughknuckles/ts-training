import {NumberStack} from './index';

describe('Stack', () => {
  describe('contents', () => {
    it('should give [] if initialized with []', () => {
      const stack = new NumberStack();
      expect(stack.contents).toEqual([]);
    });

    it('should give [3] if initialized with 3', () => {
      const stack = new NumberStack([3]);
      expect(stack.contents).toEqual([3]);
    });

    it('should give [3, 4, 5] if initialized with [3, 4, 5]', () => {
      const stack = new NumberStack([3, 4, 5]);
      expect(stack.contents).toEqual([3, 4, 5]);
    });
  });

  describe('push', () => {
    it('should increase the size of the array by one', () => {
      const stack = new NumberStack();

      expect(stack.contents.length).toEqual(0);
      stack.push(3);
      expect(stack.contents.length).toEqual(1);
    });
  });
});
