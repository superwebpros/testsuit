import { test, expect } from "@playwright/test";
import url from "../../config/frontUrl";

export default function createTest() {
  test("loads", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page.getByTestId("home")).toBeVisible();
    await expect(page.getByTestId("hero")).toBeVisible();
    await page.close();
  });
}
