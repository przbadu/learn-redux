import { store, counter } from "./../store";

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

  it('store should return initial state', () => {
    expect(
      store.getState()
    ).toBe(0)
  });

  it('should dispatch action', () => {
    /* for initial state*/
    // state = 0
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState()).toBe(1)

    // state = 1
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState()).toBe(2);

    // state = 2
    store.dispatch({type: 'DECREMENT'});
    expect(store.getState()).toBe(1)

    // state = 1
    store.dispatch({type: 'unknown'});
    expect(store.getState()).toBe(1)

    // state = 1
    store.dispatch({type: 'DECREMENT'});
    expect(store.getState()).toBe(0)
  });
});
