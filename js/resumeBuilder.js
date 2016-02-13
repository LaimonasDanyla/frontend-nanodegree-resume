var bio = {
    "name": "Laimonas Danyla",
    "role": "Web Developer",

    "contacts": {
        "mobile": "+37069914894",
        "email": "laimonas.danyla@gmail.com",
        "github": "LaimonasDanyla",
        "twitter": "@laimonasdanyla",
        "location": "Kaunas, Lithuania"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": [
        "HTML", "CSS", "Responsive website & images", "Bootstrap",
        "Java Script",
        "Python basics"
    ],
    "biopic": "images/me2.jpg"
};

bio.display = function() {
    var data = '%data%';
    var $header = $('#header');
    var $footerTopContactsLast = $("#footerContacts:last, #topContacts:last");
    var $footerContacts = $("#footerContacts:last");

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $header.prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#name").append(formattedRole);

    var footerName = HTMLcontactGeneric.replace(data, bio.name);
    $footerContacts.append(footerName);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $footerTopContactsLast.append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $footerTopContactsLast.append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $footerTopContactsLast.append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $footerTopContactsLast.append(formattedGithub);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $footerContacts.append(formattedLocation);

    var mySkills = bio.skills;
    if (mySkills.length > 0) {
        $header.append(HTMLskillsStart);
        mySkills.forEach(function(item) {
            var formattedSkill = HTMLskills.replace(data, item);
            $("#skills:last").append(formattedSkill);
        });
    }

    if (bio.biopic.length > 0) {
        var formattedPic = HTMLbiopic.replace(data,
            bio.biopic);
        $("#skills-h3").append(formattedPic);
    }
    if (bio.welcomeMessage.length > 0) {
        var formattedMessage = HTMLwelcomeMsg.replace(data,
            bio.welcomeMessage);
        $header.append(formattedMessage);
    }
};
bio.display();


//add function to make Surname all in caps after Internationalize button click
function inName(name) {
    var intlName = bio.name;
    var roleStyle = bio.role.fontcolor("#fff").fontsize(2).sup();
    //instead of bio.name $("#name").html() also works.
    name = intlName.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    // slice (0,1) is needed to take the first letter - 1 is determining the end
    //of slice
    return name[0].fontcolor("#f5ae23") + " " + name[1].fontcolor("#f5ae23") +
        " <br> " + roleStyle;
};
$("#role").append(internationalizeButton);


var education = {
    "schools": [{
        "name": "Kaunas Technology University",
        "location": "Kaunas, Lithuania",
        "degree": "M.Sc. Business Management and Administration (MBA)",
        "majors": ["Finances", "Marketing", "Management"],
        "dates": "2006",
        "url": "www.ktu.edu"
    }, {
        "name": "Udacity",
        "location": " ",
        "degree": "Intro to Programming NanoDegree",
        "majors": ["Python", "App developemnt"],
        "dates": "2016",
        "url": "www.udacity.com"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/courses/ud804"
    }, {
        "title": "Linux Command Line Basics",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/courses/ud595"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/courses/ud775"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/courses/ud304"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/courses/ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/courses/ud882"
    }, {
        "title": "Database Fundamentals",
        "school": "Microsoft Virtual Academy",
        "date": "2015",
        "url": "https://mva.microsoft.com/"
    }]
};

education.display = function() {
    var formals = education.schools;
    var onlines = education.onlineCourses;
    var name, degree, dates, location, major, title, school, url;
    var data = '%data%';

    formals.forEach(addFormalSchool);
    $('#education').append(HTMLonlineClasses);

    onlines.forEach(addOnlineClasses);

    function addFormalSchool(school) {
        name = HTMLschoolName.replace(data, school.name);
        degree = HTMLschoolDegree.replace(data, school.degree);
        dates = HTMLschoolDates.replace(data, school.dates);
        location = HTMLschoolLocation.replace(data, school.location);
        major = HTMLschoolMajor.replace(data, school.majors);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(name + degree);
        $('.education-entry:last').append(dates);
        $('.education-entry:last').append(location);
        $('.education-entry:last').append(major);
    }

    function addOnlineClasses(course) {
        title = HTMLonlineTitle.replace(data, course.title);
        school = HTMLonlineSchool.replace(data, course.school);
        date = HTMLonlineDates.replace(data, course.date);
        url = HTMLonlineURL.replace(data, course.url);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(title + school);
        $('.education-entry:last').append(date);
        $('.education-entry:last').append(url);
    }
};
education.display();


var work = {
    "jobs": [{
        "employer": "Suomen Broiler Oy",
        "title": "Representative for export markets",
        "location": "Masku, Finland",
        "dates": "2002-2015",
        "description": "Responsible for sales, marketing and customer service"
    }, {
        "employer": "Sprendika Ltd.",
        "title": "Company Manager, owner",
        "location": "Kaunas, Lithuania",
        "dates": "2005 - in progress",
        "description": "Sales, marketing and service of equipment"
    }]
};

work.display = function() {
    myWork = work.jobs;
    var employer, title, employerTitle, location, dates, description;

    myWork.forEach(addMyWork);
    function addMyWork(works) {
        employer = HTMLworkEmployer.replace("%data%", works.employer);
        title = HTMLworkTitle.replace("%data%", works.title);
        employerTitle = employer + title;
        location = HTMLworkLocation.replace("%data%", works.location);
        dates = HTMLworkDates.replace("%data%", works.dates);
        description = HTMLworkDescription.replace("%data%", works.description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(employerTitle);
        $(".work-entry:last").append(location);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(description);
    }
};
work.display();


var projects = {
    "projects": [{
        "title": "P1: Build a Portfolio Site",
        "dates": "2015 December",
        "description": "Development of responsive website on all devices " +
        "using bootstrap, image file change based on viewport, off-canvas " +
        "navigation, some simple javascript usage, some usage of polymers.",
        "images": [
            "images/sample1.jpg",
            "images/r2.jpg",
            "images/r3.jpg",
            "images/r4.jpg",
            "images/r5.jpg"
        ]
    }, {
        "title": "Sample pictures",
        "dates": "2016",
        "description": "Some sample images",
        "images": [
            "http://lorempixel.com/image_output/nature-q-c-1000-400-2.jpg",
            "http://lorempixel.com/image_output/abstract-q-c-1000-400-3.jpg"
        ]
    }]
};

projects.display = function() {
    var myProjects = projects.projects;
    var title, dates, description;

    myProjects.forEach(addMyProject);
    function addMyProject(item) {
        title = HTMLprojectTitle.replace("%data%", item.title);
        dates = HTMLprojectDates.replace("%data%", item.dates);
        description = HTMLprojectDescription.replace("%data%", item.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(description);

        if (item.images.length > 0) {
            for (var indexCount = 0;
              indexCount < item.images.length; indexCount++) {
                var projectImages = HTMLprojectImage.replace("%data%",
                    item.images[indexCount]);
                $(".project-entry:last").append(projectImages);
            }
        }
    }
};
projects.display();


//Add Map
$("#mapDiv").append(googleMap);
