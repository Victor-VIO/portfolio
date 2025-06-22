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
