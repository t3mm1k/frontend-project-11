export const getErrorKey = (error) => {
  const validationError = error.errors?.[0]

  if (typeof validationError === 'string') {
    return validationError
  }

  if (validationError?.key) {
    return validationError.key
  }

  if (error.message?.key) {
    return error.message.key
  }

  if (error.message === 'Network Error') {
    return 'network.error'
  }

  return error.message ?? 'rss.invalid'
}
