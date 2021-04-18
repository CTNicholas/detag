const detag = require('../dist/detag.node.js')

test('regular function, no args', () => {
  const res = runDetag()
  expect(res).toBeNull()
})

test('regular function, empty array', () => {
  const res = runDetag([])
  expect(res).toBeNull()
})

test('regular function, undefined passed', () => {
  const res = runDetag(undefined)
  expect(res).toBeNull()
})

test('regular function, null passed', () => {
  const res = runDetag(null)
  expect(res).toBeNull()
})

test('empty string', () => {
  const res1 = runDetag('')
  const res2 = runDetag``
  expect(res1).toBe('')
  expect(res1 === res2).toBe(true)

  const res3 = runDetagDefault('')
  const res4 = runDetagDefault``
  expect(res3 === res4).toBe(true)
  expect(res4).toBe('default value')
})

test('string passed', () => {
  const res1 = runDetag('test')
  const res2 = runDetag`test`
  expect(res1 === res2).toBe(true)
  expect(res1 === 'test').toBe(true)
})

test('primitive and string passed', () => {
  const res1 = runDetag('test primitive')
  const res2 = runDetag`test ${'primitive'}`
  expect(res1 === res2).toBe(true)
  expect(res1 === 'test primitive').toBe(true)
})

test('single primitive passed', () => {
  const res1 = runDetag('primitive')
  const res2 = runDetag`${'primitive'}`
  expect(res1 === res2).toBe(true)
  expect(res1 === 'primitive').toBe(true)
})

test('empty array primitive', () => {
  // JS converts [] to ''
  const res = runDetag`${[]}`
  expect(res).toBe('')
})

test('more primitives than strings', () => {
  const res1 = runDetag('1 is testing detag')
  const res2 = runDetag`${1} is ${'testing'}${' detag'}`
  expect(res1 === res2).toBe(true)
  expect(res1 === '1 is testing detag').toBe(true)
})

test('more strings than primitives', () => {
  const res1 = runDetag('This is a test here')
  const res2 = runDetag`This is a ${'test'} here`
  expect(res1 === res2).toBe(true)
  expect(res1 === 'This is a test here').toBe(true)
})

test('with escape chars', () => {
  const res1 = runDetag('This is a \n new line')
  const res2 = runDetag`This is a \n new line`
  expect(res1 === res2).toBe(true)
  expect(res1 === 'This is a \n new line').toBe(true)
})

test('raw string param', () => {
  const res1 = runDetagRaw('Testing \n new line')
  const res2 = runDetagRaw`Testing \n new line`
  expect(res1 !== res2).toBe(true)
  expect(res1 === 'Testing \n new line').toBe(true)
  expect(res2 === 'Testing \\n new line').toBe(true)
})

// Helper functions
function runDetag (...args) {
  return detag(args)
}

function runDetagDefault (...args) {
  return detag(args, 'default value')
}

function runDetagRaw(...args) {
  return detag(args, undefined, true)
}
