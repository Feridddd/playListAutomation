import { test, expect } from '@playwright/test';
import { PlaylistPage } from '../pages/playlistPage';

test('Verify total duration of playlist in seconds', async ({ page }) => {
  const playlistPage = new PlaylistPage(page);
  await playlistPage.goto();

  const trackNames = ['Rainy Mood', 'Spring Dance'];

  for (const name of trackNames) {
    await playlistPage.addTrackByName(name);
  }

  let expectedTotal = 0;
  for (const name of trackNames) {
    const duration = await playlistPage.getTrackDurationByName(name);
    expectedTotal += duration;
  }

  // Отримуємо фактичну тривалість з UI
  const displayedTotal = await playlistPage.getPlaylistTotalSeconds();

  // Перевірка
  expect(displayedTotal).toBe(expectedTotal);
});
