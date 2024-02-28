//lower case, UPPER CASE @ Title Case
var PersonName = "Eric";
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toUpperCase());
console.log("titlecase:", PersonName.replace(/\ew/g, function (c) { return c.toUpperCase(); }));
