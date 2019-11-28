const urlDecode = function(text) {
  const result = {};
  ///split URL into different key value pairs
  let pairs = text.split('&');
  //separate key from values
  for (let pair of pairs) {
    const withSpaces = pair.replace(/%20/g, ' ');
    const keyValue = withSpaces.split('=');
    const key = keyValue[0];
    const value = keyValue[1];
    result[key] = value;
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);