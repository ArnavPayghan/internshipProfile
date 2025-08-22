import { apiKey } from "./importExportUtil.js";
import randomString from "./importExportUtil.js"; // default import can be named anything.
import { abc, def } from "./importExportUtil.js";

import * as util from "./importExportUtil.js"; // import everything as an object.

console.log(apiKey);
console.log(randomString);
console.log(abc);
console.log(def);

// AS OBJECTS
console.log(util.apiKey);
console.log(util.default);
console.log(util.abc);
console.log(util.def);