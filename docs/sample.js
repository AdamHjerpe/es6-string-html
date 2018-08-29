new Vue({
  el: ".app",
  router: new VueRouter({ routes }),
  components: { App },
  template: `<App />` // Syntax higlighting breaks when both backticks are on
});
