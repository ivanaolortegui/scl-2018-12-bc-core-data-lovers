
google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Fighter', 65],
    ['Tank', 39],
    ['Mage', 51],
    ['Assassin', 32],
    ['Support', 26],
    ['Marksman', 23]
  ]);

  const options = {'title': 'Cantidad de Campeones por Rol',
    'width': 400,
    'height': 300,
    'colors': ['#C2A46D', '#AED4D6', '#E3D9C4', '#007191', '#1A2326', '#E0DCD0']
  };


  let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}