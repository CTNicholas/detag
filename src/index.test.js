const detag = require('../dist/detag.node.js')

test('returns true', () => {
  expect(detag(1, 2)).toBe(true)
})
