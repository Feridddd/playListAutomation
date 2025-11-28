export function toSeconds(mmss) {
  const [m, s] = mmss.split(':').map(Number);
  return m * 60 + s;
}
