"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// 创建组件核心文件模板
function genCoreTemplate(name) {
    const compName = 'S' + (0, utils_1.upperFirst)(name);
    const propsTypeName = (0, utils_1.upperFirst)(name) + 'Props';
    const propsName = name + 'Props';
    const propsFileName = name + '-type';
    const className = 's-' + name;
    return `
import { defineComponent, toRefs } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'
export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  }
})   
`;
}
exports.default = genCoreTemplate;
