async function extractAudio(videoPath) {
  // TODO: Implement ffmpeg extraction logic.
  return { audioPath: `${videoPath}.mp3` };
}

module.exports = { extractAudio };
