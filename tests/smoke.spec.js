const { test, expect } = require('@playwright/test');

test.describe('smoke', () => {
  test('page loads clean and structurally sound', async ({ page }) => {
    const problems = [];
    page.on('console', (m) => { if (m.type() === 'error') problems.push('console: ' + m.text()); });
    page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
    page.on('requestfailed', (r) => problems.push('failed: ' + r.url() + ' ' + (r.failure() || {}).errorText));
    page.on('response', (r) => {
      if (r.status() < 200 || r.status() >= 300) problems.push(r.status() + ' ' + r.url());
    });

    await page.goto('/', { waitUntil: 'load' });

    // Lazy images: drop the lazy hint so every image loads, then wait for them.
    await page.evaluate(() => document.querySelectorAll('img[loading]').forEach((i) => i.removeAttribute('loading')));
    await page.waitForFunction(() => [...document.querySelectorAll('img[src]')].every((i) => i.complete));

    expect(problems, 'console errors / failed requests').toEqual([]);

    const overflow = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      cw: document.documentElement.clientWidth,
    }));
    expect(overflow.sw, 'horizontal overflow').toBeLessThanOrEqual(overflow.cw);

    const badAnchors = await page.evaluate(() =>
      [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute('href'))
        .filter((h) => h.length > 1 && !document.getElementById(decodeURIComponent(h.slice(1)))));
    expect(badAnchors, 'anchors with no target').toEqual([]);

    const brokenImgs = await page.evaluate(() =>
      [...document.querySelectorAll('img[src]')].filter((i) => i.naturalWidth === 0).map((i) => i.getAttribute('src')));
    expect(brokenImgs, 'images that did not resolve').toEqual([]);

    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveCSS('position', 'sticky');

    await expect(page.locator('#cd-lbl')).not.toHaveText(/^\s*$/);
  });
});

test.describe('countdown states', () => {
  test.skip(({ viewport }) => viewport.width !== 1440, 'state checks run once, at 1440');

  test('before a raid night', async ({ page }) => {
    await page.goto('/?now=2026-12-10T15:00:00Z');
    await expect(page.locator('#cd-lbl')).toHaveText('Next raid night in');
  });

  test('during a raid night', async ({ page }) => {
    await page.goto('/?now=2026-12-13T02:00:00Z');
    await expect(page.locator('#cd-lbl')).toHaveText('Raid night is live');
  });
});
