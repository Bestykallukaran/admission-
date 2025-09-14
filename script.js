// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("admissionForm");
  const successMsg = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Show success message with animation
      successMsg.style.display = "block";
      successMsg.style.opacity = "0";
      setTimeout(() => { successMsg.style.opacity = "1"; }, 100);

      // Reset form fields
      form.reset();
    });
  }

  // Auto-update footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
