const treatmentSelect = document.getElementById("treatment");
const priceDisplay = document.getElementById("price-display");
const waBtn = document.getElementById("dynamic-wa-btn");

treatmentSelect.addEventListener("change", function () {
  const price = this.value;
  const treatmentName = this.options[this.selectedIndex].text;

  // Update the displayed price on the page
  priceDisplay.textContent = "₹" + Number(price).toLocaleString("en-IN");

  // Update the WhatsApp link with the chosen treatment
  const message = encodeURIComponent(
    `Hello, I checked the estimate for ${treatmentName} and would like to book an appointment.`
  );
  waBtn.href = `https://wa.me/919876543210?text=${message}`;
});