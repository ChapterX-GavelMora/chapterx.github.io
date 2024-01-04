// hide page-loader after page is loaded
$(window).on("load", function () {
  $("#page-loader").fadeOut("slow");
});
  

Vue.createApp({
  data() {
    return {
        speakers:[
            {
                name: " Dananjaya Hettiarachchi",
                image: "./res/images/speakers/dhananjaya_hettiarachchi.webp",
                description: "Dananjaya Hettiarachchi World Champion of Public Speaking 2014"
            },
            {
                name:"Peter D'Almeida",
                image:"./res/images/speakers/peter_dalmeida.png",
                description:"Peter D'Almeida Founder and CEO of N-Able"
            },
        ]
    };
  },
  methods: {},
}).mount("#page-top");
