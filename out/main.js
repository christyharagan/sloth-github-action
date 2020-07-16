"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const npm_install_1 = require("npm-install");
const segment_sloth_1 = require("segment-sloth");
const core = __importStar(require("@actions/core"));
let access_token = core.getInput('segment-access-token');
let work_id = core.getInput('segment-workspace-id');
npm_install_1.npmInstallAction().then(() => {
    console.log('Ready to deploy function');
    segment_sloth_1.deploy(false, access_token, work_id).then(() => {
        console.log('Function successfully deployed');
    }).catch(e => {
        console.error('Error deploying function:');
        console.error(e);
    });
});
