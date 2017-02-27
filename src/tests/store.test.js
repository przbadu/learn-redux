/* import store from "./../store.js";*/
const counter = require("./../store");

describe("store", () => {
  it("should should return 1", () => {
    expect(
      counter(0, {type: 'INCREMENT'})
    ).toBe(1)
  });

  it('should return 2', () => {
    expect(
      counter(1, {type: 'INCREMENT'})
    ).toBe(2)
  });

  it('should return 1', () => {
    expect(
      counter(2, {type: 'DECREMENT'})
    ).toBe(1)
  });

  it('should return 0', () => {
    expect(
      counter(1, {type: 'DECREMENT'})
    ).toBe(0)
  });

  it('should return current state for undefined', () => {
    expect (
      counter(1, {type: 'UNDEFINED'})
    ).toBe(1)
  });

  it('should return initial state', () => {
    expect(
      counter(undefined, {})
    ).toBe(0)
  });
});
