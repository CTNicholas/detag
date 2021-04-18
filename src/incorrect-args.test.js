const detag = require('../dist/detag.node.js')

test('string passed', () => {
  const res = detag('hello')
  expect(res).toBeNull()
})

test('string array passed', () => {
  const res = detag(['hello', 'testing'])
  expect(res).toBeNull()
})


test('empty array passed', () => {
  const res = detag([])
  expect(res).toBeNull()
})

test('undefined array passed', () => {
  const res = detag([undefined])
  expect(res).toBeNull()
})

test('null array passed', () => {
  const res = detag([null])
  expect(res).toBeNull()
})

test('no argument passed', () => {
  const res = detag()
  expect(res).toBeNull()
})

test('undefined passed', () => {
  const res = detag(undefined)
  expect(res).toBeNull()
})

test('null passed', () => {
  const res = detag(null)
  expect(res).toBeNull()
})

