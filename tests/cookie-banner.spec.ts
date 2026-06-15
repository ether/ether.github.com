import { expect, test } from '@playwright/test'

test.describe('cookie banner does not block page interaction', () => {
  test.beforeEach(async ({ context }) => {
    // Force first-visit state: no cookiesAccepted cookie, so the consent
    // banner is rendered.
    await context.clearCookies()
  })

  test('top bar "Links" anchor scrolls to the Links section while banner is shown', async ({ page }) => {
    await page.goto('/')

    // Sanity check: the cookie banner is open.
    await expect(page.getByRole('button', { name: 'Accept cookies' })).toBeVisible()

    // Click the "Links" item in the top bar. The Header's onClick handler
    // calls router.push('/#links') and scrolls to #links. If the modal
    // dialog is blocking pointer events, the click never fires and the URL
    // stays at "/". (The nav anchors have no href, so we locate by text.)
    await page.locator('#nav').getByText('Links', { exact: true }).click()

    await expect(page).toHaveURL(/#links$/)
    await expect(page.locator('#links')).toBeInViewport()
  })

  test('cookie banner buttons are clickable', async ({ page }) => {
    await page.goto('/')

    const acceptButton = page.getByRole('button', { name: 'Accept cookies' })
    await expect(acceptButton).toBeVisible()

    // pointer-events:none on Dialog.Content inherits to children, so the
    // banner buttons themselves stop receiving clicks. Tapping Accept must
    // dismiss the banner.
    await acceptButton.click()

    await expect(acceptButton).toBeHidden()
  })

  test('Links section anchors fire clicks while banner is shown', async ({ page, context }) => {
    await page.goto('/')
    await expect(page.getByRole('button', { name: 'Accept cookies' })).toBeVisible()

    await page.locator('#links').scrollIntoViewIfNeeded()

    // The GitHub repository anchor opens in a new tab (target="_blank"). If
    // pointer events are blocked we never get a popup event.
    const githubLink = page.getByRole('link', { name: 'GitHub repository' })
    const popupPromise = context.waitForEvent('page', { timeout: 5_000 })
    await githubLink.click()
    const popup = await popupPromise
    expect(popup.url()).toContain('github.com/ether/etherpad')
    await popup.close()
  })
})
