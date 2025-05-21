<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Basic email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        e.preventDefault();
        return;
      }

      // If all checks pass, form will submit normally
    });
  });
</script>
