"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function genTestTemplate(name) {
    return `\
import { render } from '@testing-library/vue'
import ${(0, utils_1.upperFirst)(name)} from '../src/${name}'
describe('${name} test', () => {
  test('${name} init render', async () => {
    const { getByRole } = render(${(0, utils_1.upperFirst)(name)})
    getByRole('${name}')
  })
})
`;
}
exports.default = genTestTemplate;
