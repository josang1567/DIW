var heatmapInstance = h337.create({
    container: document.getElementById('heatmap'),
    radius: 90
  });
  document.getElementById('heatmap').onclick = function(ev) {
    heatmapInstance.addData({
      x: ev.layerX,
      y: ev.layerY,
      value: 1
    });
  };