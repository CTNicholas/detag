/**
 * Converts tagged template literal parameters into a regular string parameter.
 * @param args DetagArgs - An array of arguments from the detagged function
 * @param defaultValue any - Return a default value if string argument is empty
 * @param ignoreEscapeChars boolean - Set true to not process escape characters (ie \n)
 */
function detag (
  args: any = undefined,
  defaultValue: any = undefined,
  ignoreEscapeChars: boolean = false
): string | (() => {}) | null {
  const allArgs = [args, defaultValue, ignoreEscapeChars]

  // If function passed, try wrap with detag
  if (isFunction(args)) {
    return handleWrappedFunction(allArgs)
  }

  // Error, no array passed, or array empty
  if (!isArray(args) || args.length < 1) {
    return null
  }

  // If single array element is string, this is a normal function call
  if (isString(args[0]) && args.length === 1) {
    return handleNormalFunction(allArgs)
  }

  // Error, first array value is not a valid template literal
  if (!isArray(args[0]) || !isString(args[0][0])) {
    return null
  }

  // Valid template literal passed
  return handleTaggedFunction(allArgs)
}

/**
 * Loop through and return a string from the template literal parameter values.
 * If default value is set, and string is empty, return default value.
 * @param args
 * @param defaultValue
 * @param ignoreEscapeChars
 */
function handleTaggedFunction ([args, defaultValue, ignoreEscapeChars]: any[]): string | any {
  let [literals, ...subs]: [string[], any[]] = args
  let result: string = ''

  if (ignoreEscapeChars === true) {
    // @ts-ignore
    literals = literals.raw
  }

  for (let i = 0; i < literals.length; i++) {
    result += `${literals[i]}${subs[i] || ''}`
  }

  if (defaultValue && result.length < 1) {
    return defaultValue
  }

  return result
}

/**
 * Return the first value of args as a string. If default value is set, and
 * string is empty, return default value.
 * @param args
 * @param defaultValue
 */
function handleNormalFunction ([args, defaultValue]: any[]): string | any {
  if (defaultValue !== undefined && args[0].length < 1) {
    return defaultValue
  }

  return `${args[0]}`
}

function handleWrappedFunction (allArgs): () => {} {
  const [wrappedFunc, defaultVal = undefined, ignoreEscape = false] = allArgs
  return (...args) => {
    const detagged = detag(args, defaultVal, ignoreEscape)
    return wrappedFunc(detagged)
  }
}

// Helper functions
function isFunction (arg: any): boolean {
  return arg instanceof Function
}

function isArray (arg: any): boolean {
  return Array.isArray(arg)
}

function isString (arg: any): boolean {
  return typeof arg === 'string' || arg instanceof String
}

// Converted to ESM by bundler
module.exports = detag
