import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("productType filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Product Type" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(2000);

    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
    let linksNames = links.filter((link) => link !== "");
    console.log(linksNames[0]);
    await page.getByRole("link", { name: linksNames[0] }).click();
    await page.waitForLoadState();
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole('link', { name: '〉Footwear' })).toBeVisible();
  });
}