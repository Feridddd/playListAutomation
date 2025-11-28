import { test, expect } from '@playwright/test';
import { PlaylistPage } from '../pages/playlistPage';

test('Search filters tracks', async ({ page }) => {
  const playlistPage = new PlaylistPage(page);
  await playlistPage.goto();

  await playlistPage.search('Rainy Mood');

  await expect(playlistPage.tracks).toHaveCount(1);

  await expect(playlistPage.tracks.first()).toContainText(/rainy mood/i);
});
