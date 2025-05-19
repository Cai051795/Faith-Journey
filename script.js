document.addEventListener('DOMContentLoaded', function () {
  const prayerForm = document.getElementById('prayerForm');
  const confirmation = document.getElementById('confirmation');

  prayerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate sending the form (you can replace this with real email logic)
    confirmation.style.display = 'block';

    // Reset form after submission
    prayerForm.reset();
  });
});
