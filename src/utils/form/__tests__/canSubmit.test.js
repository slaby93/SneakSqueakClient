import canSubmit from './../canSubmit';

describe('canSubmit', () => {
  test('no errors', () => {
    expect(canSubmit({
      a: null,
      b: null,
      c: null,
    }))
      .toEqual(true);
  });

  test('only errors', () => {
    expect(canSubmit({
      a: 'Required',
      b: 'Required',
      c: 'Required',
    }))
      .toEqual(false);
  });

  test('mixed errors', () => {
    expect(canSubmit({
      a: null,
      b: 'Required',
      c: 'Required',
    }))
      .toEqual(false);
  });
});

