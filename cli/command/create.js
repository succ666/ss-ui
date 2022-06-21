"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreate = void 0;
const inquirer = __importStar(require("inquirer"));
const kolorist_1 = require("kolorist");
const create_component_1 = __importDefault(require("../shared/create-component"));
// 创建类型
const CREATE_TYPES = ['component', 'lib-entry'];
// 组件分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据显示'];
function onCreate(args = { type: '' }) {
    return __awaiter(this, void 0, void 0, function* () {
        // 容错，判断用户是否输入type
        let { type } = args;
        // 未输入，提示用户重新输入，给用户一个列表去选择
        if (!type) {
            const result = yield inquirer.prompt([
                {
                    // 获取输入后的属性名
                    name: 'type',
                    // 交互方式为列表
                    type: 'list',
                    // 提示信息
                    message: '（必填）请选择创建类型：',
                    // 选项列表
                    choices: CREATE_TYPES,
                    // 默认选项
                    default: 0
                }
            ]);
            type = result.type;
        }
        // 另一个错误，用户输入了信息，但是输入错误，要求用户重新选择
        if (!CREATE_TYPES.includes(type)) {
            console.log((0, kolorist_1.red)(`当前类型仅支持：${CREATE_TYPES.join(', ')}，您输入的是："${type}", 请重新选择！`));
            return onCreate();
        }
        // 输入则创建对应的内容
        try {
            switch (type) {
                case 'component':
                    // 如果是组件，我们还需要收集组件信息
                    const info = yield inquirer.prompt([
                        {
                            name: 'name',
                            type: 'input',
                            message: '（必填）请输入组件name，将用作文件名和文件夹名称',
                            validate(value) {
                                if (value.trim() === '') {
                                    return '组件name不能为空！';
                                }
                                return true;
                            }
                        },
                        {
                            name: 'title',
                            type: 'input',
                            message: '（必填）请输入组件中文名称，将用作文档列表中显示',
                            validate(value) {
                                if (value.trim() === '') {
                                    return '组件名称不能为空！';
                                }
                                return true;
                            }
                        },
                        {
                            name: 'category',
                            type: 'list',
                            message: '（必填）请选择组件分类，将用作文档列表分类中',
                            choices: DOCS_CATEGORIES,
                            default: 0
                        }
                    ]);
                    // 创建组件模板文件
                    (0, create_component_1.default)(info);
                    break;
                default:
                    break;
            }
        }
        catch (error) { }
    });
}
exports.onCreate = onCreate;
