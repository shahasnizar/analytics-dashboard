import Chart from "chart.js/auto";

class InterpolationChart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<canvas></canvas>`;
    const ctx = this.querySelector("canvas").getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Monotone",
            data: [10, 200, 15, 300, 77, 30, 22],
            borderColor: "#61758A",
            tension: 0.4,
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Interpolation Chart",
          },
        },
      },
    });
  }
}

customElements.define("interpolation-chart", InterpolationChart);
