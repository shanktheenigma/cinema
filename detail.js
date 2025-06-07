 function toggleOffcanvas() {
        const menu = document.getElementById("menu");
        const offcanvas = document.getElementById("offcanvasMenu");

        document.getElementById("offcanvasMenu").classList.toggle("active");

        if (offcanvas.classList.contains("active")) {
          menu.innerText = "<";
        } else {
          menu.innerText = ">";
        }
      }

  const ctx = document.getElementById("Chart").getContext("2d");

  const labels = [];
  const data = [];
  const startYear = 2020;

  for (let y = startYear; y < startYear + 5; y++) {
    for (let m = 1; m <= 12; m++) {
      labels.push(`${y}-${String(m).padStart(2, "0")}`);
      data.push(Math.floor(Math.random() * 500 + 100)); // Random data
    }
  }

  let chartType = "line"; // Track current chart type
  let userChart = createChart(chartType); // Create initial chart

  function createChart(type) {
    return new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: "New User",
            data: data,
            borderColor: "#14213d",
            backgroundColor: "rgba(252, 163, 17, 0.5)",
            fill: type === "line", // only fill for line chart
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "User Record",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function ConvertToBar() {
    // Destroy existing chart
    userChart.destroy();

    // Toggle chart type
    chartType = chartType === "line" ? "bar" : "line";

    // Re-create chart with new type
    userChart = createChart(chartType);
  }

  function ConvertToBar() {
  userChart.destroy();
  chartType = chartType === "line" ? "bar" : "line";
  userChart = createChart(chartType);

  const toggleLink = document.getElementById("convert-to-bar");
  toggleLink.textContent = chartType === "line" ? "Convert to Bar Chart" : "Convert to Line Chart";
}
