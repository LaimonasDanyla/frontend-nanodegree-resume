

var name = "Laimonas Danyla";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
  "jobs": [
    {
    "employer": "Suomen Broiler Oy",
    "title": "Representative for export markets",
    "location": "Masku, Finland",
    "dates": "2002-2015",
    "description": "Responsible for sales, marketing and customer service"
    },
    {
    "employer": "Sprendika Ltd.",
    "title": "Company Manager, owner",
    "location": "Kaunas, Lithuania",
    "dates": "2005 - till now",
    "description": "Sales, marketing and service of equipment"
    }
  ]
}
//learning function
/*
function locationizer(work_obj) {
  var locationArray = [];
  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
   return locationArray;
}
console.log(locationizer(work));
*/

function displayWork(){
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace
   ("%data%", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%",
   work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedLocation = HTMLworkLocation.replace("%data%",
   work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDates = HTMLworkDates.replace("%data%",
   work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%",
   work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
  }
}
displayWork()

var projects = {
  "project": [
    {
      "title": "P1: Build a Portfolio Site",
      "dates": " 29 12 2015",
      "description": "Development of responsive website on all devices \
       using bootstrap, image file change based on viewport, off-canvas \
       navigation, some simple javascript usage, some usage of polymers.",
      "images": [
        "images/sample1.jpg",
        "images/r2.jpg",
        "images/r3.jpg",
        "images/r4.jpg",
        "images/r5.jpg"
      ]
    },
    {
    "title": "Interactive resume",
    "dates": "2016 January",
    "description": "Interactive resume using HTML, JS, CSS",
    "images": [
      "http://lorempixel.com/image_output/business-q-c-400-400-9.jpg",
      "http://lorempixel.com/image_output/abstract-q-c-400-400-1.jpg"
      ]
    }
  ]
}

projects.display = function() {
  for (index in projects.project) {
    $("#projects").append(HTMLprojectStart);
    var projectTitle = HTMLprojectTitle.replace("%data%",
      projects.project[index].title);
    $(".project-entry:last").append(projectTitle);
    var projectDescription = HTMLprojectDescription.replace("%data%",
      projects.project[index].description);
    $(".project-entry:last").append(projectDescription);

    if (projects.project[index].images.length > 0) {
      for (image in projects.project[index].images) {
        var projectImages = HTMLprojectImage.replace("%data%",
          projects.project[index].images[image]);
        $(".project-entry:last").append(projectImages);
      }
    }
  }
}
projects.display(); //call the function above.


var bio = {
  "name": "Laimonas Danyla",
  "role": "Web Developer",
  "welcomeMessage": "Welcome to my resume",
  "contacts": {
    "mobile": "+37069914894",
    "email": "laimonas.danyla@gmail.com",
    "github": "LaimonasDanyla",
    "twitter": "@laimonasdanyla",
    "location": "Kaunas, Lithuania"
  },
  "skills" : [
    "HTML", "CSS", "Responsive website & images", "Bootstrap", "Java Script",
    "Python basics"
  ],
  "bioPic": "images/me2"
};

//add function to make Surname all in caps after Internationalize button click
function inName(name) {
  var intlName = bio.name;
  //instead of bio.name $("#name").html() also works.
  name = intlName.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// slice (0,1) is needed to take the first letter - 1 is determining the end
//of slice
  return name[0] +" "+ name[1];
  }
$("#main").append(internationalizeButton);

var education = {
  "schools": [
    {
    "name": "Kaunas Technology University",
    "location": "Kaunas, Lithuania",
    "degree": "MBA",
    "majors": ["Business administration",
    "Internationa Business Management"],
    "dates": "2004-2006",
    "url": "www.ktu.edu"
    },
    {
      "name": "Udacity",
      "location": "St Mountain View, USA",
      "degree": "Intro to Programming NanoDegree",
      "majors": ["Python", "App developemnt"],
      "dates": "2015 - till now",
      "url": "www.udacity.com"
    }
  ],
  "onlineCources": [
    {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "January 2016",
    "url": "https://www.udacity.com/course/c-ud804-nd"
    },
    {
    "title": "Linux Command Line Basics",
    "school": "Udacity",
    "dates": "January 2016",
    "url": "https://www.udacity.com/course/c-ud595/l-4575425132"
    },
    {
    "title": "How to Use Git and GitHub",
    "school": "Udacity",
    "dates": "January 2016",
    "url": "https://www.udacity.com/course/c-ud775"
    },
    {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2015 December",
    "url": "https://www.udacity.com/course/c-ud304-nd"
    },
    {
    "title":"Responsive Web Design Fundamentals",
    "school": "Udacity",
    "dates": "2015 December",
    "url": "https://www.udacity.com/course/c-ud893-nd"
    },
    {
    "title": "Responsive Images",
    "school": "Udacity",
    "dates": "2015 December",
    "url": "https://www.udacity.com/course/responsive-images--ud882"
    }
  ]
}

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}
