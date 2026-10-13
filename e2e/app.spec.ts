import { expect, test } from '@playwright/test';

for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
  test(`renders the resume and project assets at ${viewport.width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize(viewport);
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Andrew Keech' })).toBeVisible();
    await expect(page.getByText('Skills', { exact: true })).toBeVisible();
    await expect(page.getByText('Work Experience', { exact: true })).toBeVisible();
    const experience = page.locator('app-work-experience mat-card');
    await expect(experience.getByRole('heading', { name: 'Alert Labs', exact: true })).toBeVisible();
    await expect(experience).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(experience).toHaveCSS('color', 'rgb(66, 66, 66)');
    await expect(page.getByRole('link', { name: 'My Resume' })).toHaveAttribute('href', /drive.google.com/);
    await expect(page.locator('.fa-circle')).toHaveCount(50);
    const images = page.locator('.project-image');
    await expect(images).toHaveCount(7);
    for (const image of await images.all()) {
      await expect(image).toBeVisible();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    }
    await expect(page.getByRole('link', { name: 'More Info' })).toHaveCount(7);
    await page.goto('/resume');
    await expect(page.getByRole('heading', { name: 'Andrew Keech' })).toBeVisible();
    await expect(images).toHaveCount(7);
    expect(errors).toEqual([]);
  });
}
