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
                description: "World Champion of Public Speaking 2014",
                event: "Dream Big 2021",
                link:"http://gavel.mrt.ac.lk/dream-big-2021-the-art-of-storytelling/"
            },
            {
                name:"Peter D'Almeida",
                image:"./res/images/speakers/peter.webp",
                description:"Founder and CEO of N-Able",
                event: "Speech Olympiad 2021",
                link:"http://gavel.mrt.ac.lk/finals-speech-olympiad-xiv/"
            },
            {
              name:"Santhush Weeraman",
              image:"./res/images/speakers/santhush.webp",
              description:"Singer, Composer, Entrepreneur",
              event: "Speech Olympiad 2023",
              link:"https://www.facebook.com/media/set?vanity=speech.olympiad.uom&set=a.758347263006290"
            }
        ],
        contact:[
          {
            "name": "Umesha Thilakarathna",
            "position": "President",
            "email": "tilakarathnaua.20@uom.lk",
            "phoneNumber": "+94 77 067 6760"
          },
          {
            "name": "Inodee Fernando",
            "position": "Vice President",
            "email": "inodee.fernando@gmail.com",
            "phoneNumber": "+94 77 067 6760"
          },
          {
            "name": "Shenali Liyanage",
            "position": "Assistant Vice President",
            "email": "shenali.ruwanya@gmail.com",
            "phoneNumber": "+94 71 474 7845"
          },
          {
            "name": "Damsith Adikari",
            "position": "Co-chair ChapterX",
            "email": "damsithadikari2001@gmail.com",
            "phoneNumber": "+94 71 384 3356"
          }
        ]
        
    };
  },
  methods: {},
}).mount("#page-top");
