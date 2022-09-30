"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        tsconfigRootDir: path_1.default.resolve(__dirname, '../../tsconfig'),
        project: ['base.json', '../../apps/*/tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['.eslintrc.js', '/packages/**/*'],
};
