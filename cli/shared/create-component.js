"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const kolorist_1 = require("kolorist");
const core_1 = __importDefault(require("../template/core"));
const types_1 = __importDefault(require("../template/types"));
const style_1 = require("../template/style");
const test_1 = __importDefault(require("../template/test"));
const template_1 = __importDefault(require("../template"));
const WRITE_FILE_OPTIONS = { encoding: 'utf-8' };
function createComponent(meta) {
    const { name } = meta;
    // 拼接组件目录
    const componentDir = (0, path_1.resolve)('../src', name);
    // 其他核心文件目录：组件源文件、类型、样式、测试
    const compSrcDir = (0, path_1.resolve)(componentDir, 'src');
    const styleDir = (0, path_1.resolve)(componentDir, 'style');
    const testDir = (0, path_1.resolve)(componentDir, 'test');
    (0, fs_extra_1.ensureDirSync)(compSrcDir);
    (0, fs_extra_1.ensureDirSync)(styleDir);
    (0, fs_extra_1.ensureDirSync)(testDir);
    // 文件和内容创建
    // 核心文件：组件文件
    const coreFilePath = (0, path_1.resolve)(compSrcDir, name + '.tsx');
    (0, fs_extra_1.writeFileSync)(coreFilePath, (0, core_1.default)(name), WRITE_FILE_OPTIONS);
    // 核心文件：组件类型文件
    const typesFilePath = (0, path_1.resolve)(compSrcDir, name + '-type.ts');
    (0, fs_extra_1.writeFileSync)(typesFilePath, (0, types_1.default)(name), WRITE_FILE_OPTIONS);
    // 核心文件：组件样式文件
    // 样式文件
    const styleFilePath = styleDir + `/${meta.name}.scss`;
    (0, fs_extra_1.writeFileSync)(styleFilePath, (0, style_1.genStyleTemplate)(meta.name), WRITE_FILE_OPTIONS);
    // 核心文件：测试文件
    const testFilePath = testDir + `/${meta.name}.test.ts`;
    (0, fs_extra_1.writeFileSync)(testFilePath, (0, test_1.default)(meta.name), WRITE_FILE_OPTIONS);
    // 组件索引文件
    const indexFilePath = componentDir + `/index.ts`;
    (0, fs_extra_1.writeFileSync)(indexFilePath, (0, template_1.default)(meta.name), WRITE_FILE_OPTIONS);
    // 创建成功通知
    console.log((0, kolorist_1.lightGreen)(`
      ✔️ 组件${name}目录创建生成
    `));
    console.log((0, kolorist_1.lightBlue)(`
      ✔️ 组件目录：${componentDir}
    `));
}
exports.default = createComponent;
