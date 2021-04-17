const detag = require('../dist/detag.node.js')

test('', () => {
})

/*
test('returns string', () => {
  const result = returnArg`hello`
  expect(result === 'hello').toBe(true)
})

test('returns same value', () => {
  const res1 = returnArg('test')
  const res2 = returnArg`test`
  expect(res1 === res2).toBe(true)
})

test('default value correct', () => {
  const res1 = defaultValue('')
  const res2 = defaultValue``
  expect(res1 === res2 === 'default').toBe(true)
})

function returnArg (...args) {
  return detag(args)
}

function defaultValue (...args) {
  return detag(args, 'default')
}
*/
