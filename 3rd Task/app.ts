//45 Assinments 3rd Task (lower case, UPPER CASE & Title Case)

let PersonName: string ="Eric"

//To print lower case, UPPER CASE @ Title Case
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toUpperCase());
console.log("titlecase:", PersonName.replace(/\ew/g,c => c.toUpperCase()));