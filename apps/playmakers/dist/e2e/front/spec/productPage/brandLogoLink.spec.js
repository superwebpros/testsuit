"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
const brandNameFormat_1 = __importDefault(require("../../../../helpers/brandNameFormat"));
function createTest() {
    (0, test_1.test)("click on brand logo in product page redirect to collection brand", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.locator(".ais-InfiniteHits-item").first().click();
        await page.waitForLoadState();
        const brandName = await page
            .getByTestId("brandLink")
            .getAttribute("alt");
        await page.getByTestId("brandLink").click();
        await page.waitForLoadState();
        (0, test_1.expect)(page.url()).toContain(frontUrl_1.default + "/collections/" + (0, brandNameFormat_1.default)(brandName));
        (0, test_1.expect)(page.url()).not.toContain(frontUrl_1.default + "/collections/" + "all?q=" + brandName);
    });
}
exports.default = createTest;