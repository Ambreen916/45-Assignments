// 45 Assignments # 38th

// make a funtion of city
function describe_city(city : string , country :string = "Saudi Arab"){
    console.log(`${city} is in ${country}.`)
}
describe_city("Jaddah"); // Default Country

describe_city("Riyadh"); // Default country

describe_city("Egypt", "Cairo"); // Custom country

