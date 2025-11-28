import { test, expect } from '@playwright/test';
import { PlaylistPage } from '../pages/playlistPage';

test('Add a track by name using "+" button', async ({ page }) => {
  const playlistPage = new PlaylistPage(page);

  await playlistPage.goto();

  await expect(playlistPage.playlistTracks).toHaveCount(0);

  const trackName = 'Rainy Mood';
  await playlistPage.addTrackByName(trackName);

  await expect(playlistPage.playlistTracks).toHaveCount(1);

  const playlistTrackText = await playlistPage.getPlaylistText(0);
  await expect(playlistTrackText).toContain(trackName);
});
