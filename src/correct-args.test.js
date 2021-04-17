const detag = require('../dist/detag.node.js')

test('string array passed', () => {
  const res = detag(['hello'])
  expect(res === 'hello').toBe(true)
})

test('string array passed', () => {
  const res = detag(['hello'])
  expect(res === 'hello').toBe(true)
})
