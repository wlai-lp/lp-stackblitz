

// Define a function to be executed when the target class appears
function handleNewElement() {
  console.log('New element with class "LPMcontainer" appeared.');
  hideLoadingAnimation();
  // Do something when the new element appears
}

// Create a MutationObserver instance
const observer = new MutationObserver((mutationsList) => {
  // Iterate through mutations to check for added nodes
  mutationsList.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      // Check if the added node is an element with the target class
      if (node.nodeType === 1 && node.classList.contains('LPMcontainer')) {
        // Call the handler function when the target class appears
        handleNewElement();
      }
    });
  });
});

// Configure the MutationObserver to watch for changes in the document's subtree
const observerConfig = {
  childList: true,
  subtree: true
};


// Hide loading animation
function hideLoadingAnimation() {
  document.getElementById('loading-animation').style.display = 'none';
}

// Start observing the document for changes
observer.observe(document.documentElement, observerConfig);

