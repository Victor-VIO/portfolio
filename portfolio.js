window.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("skillChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Frontend", "Backend", "Databases", "Cloud", "DevOps"],
      datasets: [
        {
          label: "Proficiency",
          data: [90, 80, 75, 60, 65],
          backgroundColor: "#ff5722",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
});

function openModal(id) {
  document.getElementById("modal-" + id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById("modal-" + id).style.display = "none";
}

function outsideClick(event, id) {
  if (event.target.classList.contains("modal")) {
    closeModal(id);
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the normal form submission

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        // If email sent successfully, redirect to Thank You page
        window.location.href = "thankyou.html";
      } else {
        // Show error message if there's a problem
        response.json().then(function (data) {
          if (data.errors) {
            alert(data.errors.map((error) => error.message).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        });
      }
    })
    .catch(function (error) {
      alert("Oops! There was a problem submitting your form.");
    });
});
