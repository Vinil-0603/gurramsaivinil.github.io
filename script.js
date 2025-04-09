document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Load dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
    
    // Type Animation (only if the element exists)
    const typeElement = document.getElementById('type-animation');
    if (typeElement) {
      const messages = [
        'Passionate about Data Science & AI.',
        'Skilled in Python, TensorFlow, PyTorch, and AWS.'
      ];
      let messageIndex = 0;
      let charIndex = 0;
      const typingDelay = 50;
      const erasingDelay = 30;
      const newMessageDelay = 2000;
  
      function type() {
        if (charIndex < messages[messageIndex].length) {
          typeElement.textContent += messages[messageIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          setTimeout(erase, newMessageDelay);
        }
      }
  
      function erase() {
        if (charIndex > 0) {
          typeElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          messageIndex = (messageIndex + 1) % messages.length;
          setTimeout(type, typingDelay + 1100);
        }
      }
  
      setTimeout(type, newMessageDelay);
    }
  });
  