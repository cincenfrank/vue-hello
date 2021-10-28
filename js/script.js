Vue.config.devtools = true;
window.addEventListener("DOMContentLoaded", () => {
  const vueApp = new Vue({
    el: "#root",
    data: {
      title: "Questo è un titolo scritto con Vue",
      image:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/vuet-dark_870x220.png?sfvrsn=83bce1fb_3",
      image_alt: "vue logo image",
      image_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, magni esse! Consequatur aperiam quam repellendus molestias commodi iusto nisi cupiditate tempora soluta ab. Molestiae sapiente tenetur eaque rerum quae quia!",
      last_update: new Date().toUTCString(),
    },
    methods: {
      update_date() {
        this.last_update = new Date().toUTCString();
      },
    },
  });
});
