// Function to wrap each letter in a span
function wrapTextInSpans(element) {
    const text = element.textContent;
    element.innerHTML = ''; // Clear existing content
  
    // Loop through each character and wrap it in a span
    for (const char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      element.appendChild(span);
    }
  }
  
  // Function to add hover effect to each span
  function addHoverEffect(element) {
    const spans = element.querySelectorAll('span');
  
    spans.forEach(span => {
      span.addEventListener('mouseover', () => {
        span.style.color = getRandomColor(); // Change color on hover
      });
  
      span.addEventListener('mouseout', () => {
        span.style.color = ''; // Reset color when not hovering
      });
    });
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Get the element with the ID 'changeable-text'
  const textElement = document.getElementById('changeable-text');
  
  // Wrap each letter in a span
  wrapTextInSpans(textElement);
  
  // Add hover effect to each span
  addHoverEffect(textElement);
  