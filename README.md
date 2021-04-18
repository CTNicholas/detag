# Detag
Tagged template literals, without substitutions. Sometimes tagged template literals are handy without needing to use their literal and substitution parameters.
Detag converts tagged template literals arguments into regular string arguments, so that both types of 
function call return the same string argument.
## Install
```shell
npm install detag
```
## How to use
Use the rest parameter to collect arguments, and pass to detag. Detag will return a string, equivalent to calling
the function normally:
```js
import detag from 'detag'

// With detag
function detaggedFunction (...args) {
  const name = detag(args)
  console.log(name)
}

//  'I am Chris' ✅
detaggedFunction('I am ' + 'Chris')

//  'I am Chris' ✅
detaggedFunction`I am ${'Chris'}`
```

```js
// Alternative detag definition
const detaggedFunction = detag(name => {
  console.log(name)
})
```


### Default value
Supply a default value by passing a second argument:
```js
import detag from 'detag'

// Detag default value
function withDefault (...args) {
  const name = detag(args, 'Adam')
  console.log(name)
}

// 'Rachel'
withDefault`Rachel`

// 'Adam'
withDefault``
```
```js
// Alternative detag definition
const withDefault = detag(name => {
  console.log(name)
}, 'Adam')
```

### Ignore escape characters
Ignore escape characters by passing `true` as the third argument:
```js
import detag from 'detag'

function dontIgnore (...args) {
  const cookedText = detag(args)
  console.log(cookedText)
}

function ignoreEscape (...args) {
  const rawText = detag(args, '', true)
  console.log(rawText)
}

// 'New line
//   now'
dontIgnore`New line \n now`

// 'New line \n now'
ignoreEscape`New line \n now`
```

```js
// Alternative detag definition
const ignoreEscape = detag(name => {
  console.log(name)
}, '', true)
```
