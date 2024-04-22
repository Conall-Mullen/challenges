let data = NaN;

switch (typeof data) {
  case "undefined":
    console.log("Undefined");
    break;
  case "object":
    if (Array.isArray(data)) {
      console.log("Array");
    } else if (Object.is(data, null)) {
      console.log("Null");
    } else {
      console.log("Object");
    }
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("Not a number");
    } else {
      console.log("Number");
    }
    break;
  case "string":
    console.log("String");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  case "bigint":
    console.log("Big Int");
    break;
  case "function":
    console.log("Function");
    break;

  default:
    console.log("I have no idea");
}
