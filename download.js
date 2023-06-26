function downloadPDF() {
    // Get the path to the PDF file.
    const path = '/path/to/my-cv.pdf';
  
    // Create a new Blob object from the PDF file.
    const blob = new Blob([new File(path)], {type: 'application/pdf'});
  
    // Create a download link for the PDF file.
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'my-cv.pdf';
  
    // Click the download link.
    link.click();
  }