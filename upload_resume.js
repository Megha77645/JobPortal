const fileSelector = document.getElementById('resume-box');
const fileInput = document.getElementById('hidden-file-input');
const fileInfo = document.getElementById('selected-file-info');

// Configure file input for single selection only
fileInput.setAttribute('multiple', false); // Ensures single file selection
fileInput.setAttribute('accept', '.pdf,application/pdf'); // Restrict to PDF files only

fileSelector.addEventListener('click', () => {
  fileInput.value = ''; // Clear previous selection
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    fileInfo.innerHTML = `
      <strong>Selected File:</strong><br>
      Name: ${file.name}<br>
      Size: ${(file.size / 1024).toFixed(2)} KB<br>
      Type: ${file.type || 'Unknown'}
    `;
  } else {
    fileInfo.textContent = 'No file selected';
  }
});