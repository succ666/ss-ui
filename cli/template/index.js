"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function genIndexTemplate(name) {
    const compName = (0, utils_1.upperFirst)(name);
    return `\
import { App } from 'vue'
import ${compName} from './src/${name}'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'
// 具名导出
export { ${compName} }
// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, ${compName}, options)
  }
}
`;
}
exports.default = genIndexTemplate;
