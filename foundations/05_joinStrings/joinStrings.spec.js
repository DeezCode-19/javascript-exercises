const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Al-dison', () => {
    expect(values.firstName).toEqual('Al-dison');
  });
  test('lastName is Ahadain', () => {
    expect(values.lastName).toEqual('Ahadain');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2006', () => {
    expect(values.birthYear).toEqual(2006);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Al-dison Ahadain and I am 20 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Al-dison Ahadain', () => {
    expect(values.fullName).toEqual('Al-dison Ahadain');
  });
  test('age is 20', () => {
    expect(values.age).toEqual(20);
  });
});
