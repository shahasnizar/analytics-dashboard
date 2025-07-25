import Chart from "chart.js/auto";

class BarChart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<canvas></canvas>`;
    const ctx = this.querySelector("canvas").getContext("2d");

    new Chart(ctx, {
      type: "bar", // <-- Bar chart doesn't support 'tension' or 'cubicInterpolationMode'
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Sales",
            data: [66, 200, 45, 300, 77, 89, 22],
            backgroundColor: "#61758A",
            borderRadius: 6,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Bar Chart",
          },
        },
      },
    });
  }
}

customElements.define("bar-chart", BarChart);
