"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// 创建组件属性类型声明文件模板
function genTypesTemplate(name) {
    // 属性类型声明和属性类型
    const propsTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    const propsName = name + 'Props';
    return `\
import { ExtractPropTypes, PropType } from 'vue'
export const ${propsName} = {} as const
export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>
`;
}
exports.default = genTypesTemplate;
