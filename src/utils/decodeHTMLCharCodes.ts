export const decodeHtmlCharCodes = (str: string) => {
  // eslint-disable-next-line func-names
  return str
    .replace("&quot;", '"')
    .replace("&quot;", "'")
    .replace("&rsquo;", '"')
    .replace("&eacute;", "é")
    .replace("&uuml;;", "ü")
    .replace(/(&#(\d+);)/g, function (match, capture, charCode) {
      return String.fromCharCode(charCode)
    })
}
