"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genStyleTemplate = void 0;
function genStyleTemplate(name) {
    return `\
.s-${name} {
  /* your component style */
}
`;
}
exports.genStyleTemplate = genStyleTemplate;
