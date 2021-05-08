import UrlHelper from './url'

it('gets a parameter from a URL query string', () => {
  const result = UrlHelper.getParamValuesFromUrl('foo', '?foo=bar&baz=1')
  expect(result).toEqual(['bar'])
})

it('returns null if it can not find a parameter in a URL query string', () => {
  const result = UrlHelper.getParamValuesFromUrl('foo', '?goo=bar&baz=1')
  expect(result).toEqual(null)
})
