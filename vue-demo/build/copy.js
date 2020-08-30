const cp = require('child_process')
const path = require('path');

const source = path.join(__dirname, '../src/vendor/vue/vue.esm.js')
const dest = path.join(__dirname, '../node_modules/vue/dist/')
cp.execSync(`copy /y ${source} ${dest}`)