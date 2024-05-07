"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("appears only when socks are selected", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        // await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'socks', exact: true }).click();
        // await page.waitForTimeout(1000);
        await (0, test_1.expect)(page.getByRole("button", { name: "Socks Height" })).toBeVisible();
        // Check that socks height is not visible when socks are not selected
        await page.getByRole('button', { name: 'socks', exact: true }).click();
        // await page.waitForTimeout(1000);
        await (0, test_1.expect)(page.getByRole("button", { name: "Socks Height" })).not.toBeVisible();
        // await page.waitForTimeout(3000);
    });
}
exports.default = createTest;
