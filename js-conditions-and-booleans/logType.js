let data = NaN;

switch (typeof data) {
  case "undefined":
    console.log("undefined");
    break;
  case "object":
    if (Array.isArray(data)) {
      console.log("array");
    } else if (Object.is(data, null)) {
      console.log("null");
    } else {
      console.log("object");
    }
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("NaN");
    } else {
      console.log("Number");
    }
    break;
  case "string":
    console.log(typeof data);
    break;
  case "boolean":
    console.log(typeof data);
    break;
  case "bigint":
    console.log(typeof data);
    break;
  case "function":
    console.log(typeof data);
    break;

  default:
    console.log("I have no idea");
}
