let urlHelper = {};

/**
 * This function can be used to pull a query parameter from a URL.
 * @param paramName The name of the URL query parameter to extract.
 * @param urlQueryParamString The query parameter section of a URL.
 * @returns An array of values formed from the values of the query parameter.
 */
urlHelper.getParamValuesFromUrl = (paramName, urlQueryParamString) => {
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`);
  let results = regex.exec(urlQueryParamString);
  if (!results) return null

  results = decodeURIComponent(results[1].replace(/\+/g, " "));
  return results.toString().split(",");
};

export default urlHelper;
