var React = require("react"),
    Fluxxor = require("fluxxor");

var Application = require("./components/application.jsx"),
    ImageStore = require("./stores/image_store"),
    CarouselStore = require("./stores/carousel_store"),
    actions = require("./actions");

require("./style.less");

var images = ["images/bttf1.png", "images/bttf2.png", "images/bttf3.png",
              "images/bttf4.png", "images/bttf5.png", "images/bttf6.png"];

var stores = {
  CarouselStore: new CarouselStore({count: images.length}),
  ImageStore: new ImageStore({images: images})
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<Application flux={flux} />, document.getElementById("app"));
