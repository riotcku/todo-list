var systemLocate = System.locate;

System.locate = function(load) {
  var System = this;
  return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
      if(address.lastIndexOf("html.js") > -1) return address;
      if(address.lastIndexOf("css.js") > -1) return address;
      return address + System.cacheBust;
  });
};
System.cacheBust = '?bust=' + Date.now();