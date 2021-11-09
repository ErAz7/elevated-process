const ROOT = __dirname;
const path = require('path');

export const root = (...paths) => path.join(ROOT, ...paths);
