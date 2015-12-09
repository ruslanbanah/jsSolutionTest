Exporter2Csv = {
  exportAllVenues: function() {
    var self = this;
    var venues = self._export();
    var csv = Papa.unparse(venues);
    self._downloadCSV(csv);
  },
  _export: function() {
    var fields = [
      'Name',
      'City',
      'Street Address',
      'Latitude',
      'Longitude'
    ];
    var data = [];
    var venues = Venues.find().fetch();
    _.each(venues, function(item) {
      data.push([
        item.name,
        item.city,
        item.address,
        item.lat,
        item.lng
      ]);
    });
    return {fields: fields, data: data};
  },
  _downloadCSV: function(csv) {
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
    a.download = "contacts.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}