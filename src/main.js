var ctx = document.getElementById("pie-chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "pie",

  // The data for our dataset
  data: {
    labels: ["arah Mataram", "arah Kopang"],
    datasets: [
      {
        //label: 'My First dataset',
        backgroundColor: ["#36A2EB", "#FFCD56"],
        //borderColor: 'rgb(255, 99, 132)',
        data: [4324, 1022],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

// grafik total jumlah kendaraan dua arah per hari
var bar_ctx = document.getElementById("bar-chart").getContext("2d");
var labels = ["14-01-2020", "15-01-2020", "16-01-2020", "17-01-2020"];
var bar_chart = new Chart(bar_ctx, {
  type: "bar",
  data: {
    //labels: ['senin', 'selasa', 'rabu', 'kamis'],
    labels: labels,
    datasets: [
      {
        label: "Total Jumlah Kendaraan Dua Arah per hari",
        backgroundColor: "#36A2EB",
        data: [11000, 12000, 13000, 14000],
      },
    ],
  },
  options: {},
});

// line
var line_ctx = document.getElementById("line-chart").getContext("2d");
var line_chart = new Chart(line_ctx, {
  type: "line",
  data: {},
  options: {},
});
