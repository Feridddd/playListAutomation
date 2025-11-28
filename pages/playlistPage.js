import { toSeconds } from '../helpers/utils.js';
import dotenv from 'dotenv';

dotenv.config();

export class PlaylistPage {
  constructor(page) {
    this.page = page;

    this.baseURL = process.env.VITE_APP_URL;

    this.searchInput = page.getByLabel('Search');

    this.tracks = page.locator('#tracklist .MuiGrid-root.MuiGrid-container');

    this.playlistTracks = page.locator('#playlist .MuiGrid-root.MuiGrid-container');

    this.playlistTotalSeconds = page.locator('#playlist-duration');
  }
  async goto() {
    await this.page.goto(this.baseURL);
  }

  async search(text) {
    await this.searchInput.fill(text);
  }

  async addTrackByName(name) {
    const track = this.tracks.filter({ hasText: name });
    const count = await track.count();
    if (count === 0) throw new Error(`Track "${name}" not found`);
    await track.first().locator('button:has-text("+")').click();
  }

  async getTrackDurationByName(name) {
    const track = this.playlistTracks.filter({ hasText: name });
    const count = await track.count();
    if (count === 0) throw new Error(`Track "${name}" not found in playlist`);

    const durationP = track.first().locator('div').nth(2).locator('p');
    const durationText = await durationP.innerText();
    return toSeconds(durationText);
  }

  async getPlaylistText(index = 0) {
    return this.playlistTracks.nth(index).innerText();
  }

  async getPlaylistTotalSeconds() {
    const text = await this.playlistTotalSeconds.innerText();
    return Number(text);
  }
}
