let urlHelper: any = {};

/**
 * This function can be used to pull a query parameter from a URL.
 * @param paramName The name of the URL query parameter to extract.
 * @param urlQueryParamString The query parameter section of a URL.
 * @returns An array of values formed from the values of the query parameter.
 */
urlHelper.getParamValuesFromUrl = (paramName: string, urlQueryParam: string): string[] => {
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`);
  let results: RegExpExecArray | string | null  = regex.exec(urlQueryParam);
  if (!results) return []

  results = decodeURIComponent(results[1].replace(/\+/g, " "));
  return results.toString().split(",");
};

export default urlHelper;
