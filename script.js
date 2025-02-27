// script.js

// Mapping of characters to their mirrored equivalents
const mirrorMap = {
  A: 'А', B: 'ᗺ', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'Ⅎ', G: '⅁',
  H: 'H', I: 'I', J: 'ſ', K: 'ʞ', L: '˥', M: 'W', N: 'N',
  O: 'O', P: 'Ԁ', Q: 'Ό', R: 'ᴚ', S: 'S', T: '⊥', U: '∩',
  V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z',
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ',
  h: 'ɥ', i: 'ı', j: 'ɾ', k: 'ʞ', l: 'ʃ', m: 'ɯ', n: 'u',
  o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n',
  v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  0: '0', 1: 'Ɩ', 2: 'ᄅ', 3: 'Ɛ', 4: 'ㄣ', 5: 'ϛ', 6: '9',
  7: 'ㄥ', 8: '8', 9: '6'
};

document.getElementById('transform-btn').addEventListener('click', function () {
  const userInput = document.getElementById('user-input').value;

  // Reverse the text
  const reversedText = userInput.split('').reverse().join('');
  document.getElementById('reversed-text').textContent = reversedText;
  document.getElementById('hidden-reversed-text').textContent = reversedText; // Store reversed text

  // Mirror the text
  const mirroredText = userInput.split('').map(char => mirrorMap[char] || char).join('');
  document.getElementById('mirrored-text').textContent = mirroredText;
  document.getElementById('hidden-mirrored-text').textContent = mirroredText; // Store mirrored text
});

// Copy reversed text
document.getElementById('copy-reversed-btn').addEventListener('click', function () {
  const reversedText = document.getElementById('hidden-reversed-text').textContent;
  navigator.clipboard.writeText(reversedText).then(() => {
    alert('Reversed text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});

// Copy mirrored text
document.getElementById('copy-mirrored-btn').addEventListener('click', function () {
  const mirroredText = document.getElementById('hidden-mirrored-text').textContent;
  navigator.clipboard.writeText(mirroredText).then(() => {
    alert('Mirrored text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});
