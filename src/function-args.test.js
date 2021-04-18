const detag = require('../dist/detag.node.js')

test('wrapped function', () => {
  let result1 = ''
  let result2 = ''
  const func1 = detag(arg =>  result1 = arg)
  const func2 = detag(arg =>  result2 = arg)
  func1(`Test ${'primitive'}`)
  func2`Test ${'primitive'}`
  expect(result1 === result2).toBe(true)
  expect(result1 === 'Test primitive').toBe(true)
})

test('wrapped function with default', () => {
  let result1 = ''
  let result2 = ''
  const func1 = detag(arg => result = arg, 'default value')
  const func2 = detag(arg => result = arg, 'default value')
  func1``
  func2``
  expect(result1 === result2).toBe(true)
  expect(result).toBe('default value')
})

test('wrapped function with raw', () => {
  let result1 = ''
  let result2 = ''
  const func1 = detag(arg => result1 = arg, '', false)
  const func2 = detag(arg => result2 = arg, '', true)
  func1`Testing \n new line`
  func2`Testing \n new line`
  expect(result1 === 'Testing \n new line').toBe(true)
  expect(result2 === 'Testing \\n new line').toBe(true)
})
