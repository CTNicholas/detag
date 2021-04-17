type DetagArgs = [string] | [string[], ...any]

function detag (
  args: DetagArgs = undefined,
  defaultValue: any = undefined,
  raw: boolean = false
): string | null {

  // String passed, assume mistake and return regular string
  if (isString(args)) {
    return `${args}`
  }

  // Error, no array passed
  if (!isArray(args)) {
    return null
  }

  // Empty array passed, return default value
  if (args.length < 1) {
    return defaultValue
  }

  // If first array element is string, normal function call, return string
  if (isString(args[0])) {
    return `${args[0]}`
  }

  // Error first array element is not array or string
  if (!isArray(args[0])) {
    return null
  }

  // Tagged template literal used
  const [literals, ...subs] = args
  let result = ''

  // Loop through tagged template literal args and return string
  for (let i = 0; i < literals.length; i++) {
    result += `${literals[i]}${subs[i] || ''}`
  }

  return result
}

// Helper functions
function isArray (arg) {
  return Array.isArray(arg)
}

function isString (arg) {
  return typeof arg === 'string' || arg instanceof String
}

// Converted to ESM by bundler
module.exports = detag
