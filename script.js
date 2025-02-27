// script.js
document.getElementById('transform-btn').addEventListener('click', function () {
  const userInput = document.getElementById('user-input').value;

  // Reverse the text
  const reversedText = userInput.split('').reverse().join('');
  document.getElementById('reversed-text').textContent = reversedText;

  // Mirror the text (displayed using CSS)
  document.getElementById('mirrored-text').textContent = userInput;
});

// Copy reversed text
document.getElementById('copy-reversed-btn').addEventListener('click', function () {
  const reversedText = document.getElementById('reversed-text').textContent;
  navigator.clipboard.writeText(reversedText).then(() => {
    alert('Reversed text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});

// Copy mirrored text
document.getElementById('copy-mirrored-btn').addEventListener('click', function () {
  const mirroredText = document.getElementById('mirrored-text').textContent;
  navigator.clipboard.writeText(mirroredText).then(() => {
    alert('Mirrored text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});
