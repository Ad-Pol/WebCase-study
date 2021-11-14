//Массивы данных
//Bio

const bio = {
  name : "Ad Pol",
  role : "WEB Dev",
  contacts : {
    mobile: "0502356993",
    email: "pro100ad.ua@gmail.com",
    github: "Ad-Pol",
    twitter: "Pol",
    location: "Ukraine",
    },
  welcomeMessage: "Hello, my name is Ad",
  skills: ['skill1', 'skill2', 'skill3'],
  biopic: "https://thumbs.dreamstime.com/b/close-up-head-shot-confident-young-man-studio-portrait-close-up-head-shot-confident-serious-concentrated-young-man-looking-170081471.jpg",
};

//Work

const work = {
  jobs: [{
      employer: 'DeliveryBoy',
      title: 'Delivery Company1',
      location: 'USA',
      dates: '22.02.1667',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae quae, tempore maxime sed perspiciatis quo voluptatem facere cupiditate omnis beatae voluptate provident aliquam sit veniam excepturi amet voluptatibus exercitationem', 
    },
    {
      employer: 'DeliveryStar',
      title: 'Delivery Company2',
      location: 'Canada',
      dates: '29.12.1994',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae quae, tempore maxime sed perspiciatis quo voluptatem facere cupiditate omnis beatae voluptate provident aliquam sit veniam excepturi amet voluptatibus exercitationem', 
    }
  ],
}

//Projects

const projects = {
  projects: [{
    title: 'First project',
    dates: '2014',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repud',
    images: [
      'https://bigenc.ru/media/2016/10/27/1235208547/19117.jpg',
      'https://miro.medium.com/max/1200/1*WmDm9M326xfYEnRYn9GmxA.jpeg',
    ]}
  ]
}

//Education

const education = {
  schools: [{
    name: 'University',
      location: 'USA',
      degree: 'Foort',
      majors: [
        'Major1',
        'Major2',
      ],
      dates: '2013',
      url: 'https://webcase.com.ua/',
  }],
  onlineCourses: [{
    title: 'Front-end',
    school: 'WebCase',
    dates: '05.08.2021 - 09.09.2021',
    url: 'https://webcase.com.ua/',
  }]
}

//Заменияем элементы
//Bio

const bioTitle = [
  HTMLheaderName.replace('%data%', bio.name),
  HTMLheaderRole.replace('%data%', bio.role)
]
$('#header').prepend(bio);

const contact = [
  HTMLmobile.replace('%data%', bio.contacts.mobile),
  HTMLemail.replace('%data%', bio.contacts.email),
  HTMLtwitter.replace('%data%', bio.contacts.twitter),
  HTMLgithub.replace('%data%', bio.contacts.github),
  HTMLlocation.replace('%data%', bio.contacts.location),
]
$('#topContacts').prepend(contact);

//Contacts footer
$('#footerContacts').prepend(contact);

const welcome = [
  HTMLbioPic.replace('%data%', bio.biopic),
  HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
]
$('#topContacts').after(welcome);


$('.welcome-message').after(HTMLskillsStart);

bio.skills.forEach(el => {
  let formatedHTMLskills = HTMLskills.replace('%data%', el)
  $('#skills').prepend(formatedHTMLskills)
})

//Works

$('#workExperience').append(HTMLworkStart);

work.jobs.forEach(el => {
  let formatedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', el.employer);
  let formatedHTMLworkTitle = HTMLworkTitle.replace('%data%', el.title);
  let formatedHTMLworkDates = HTMLworkDates.replace('%data%', el.dates);
  let formatedHTMLworkLocation = HTMLworkLocation.replace('%data%', el.location);
  let formatedHTMLworkDescription = HTMLworkDescription.replace('%data%', el.description);
  $('.work-entry').append(formatedHTMLworkEmployer + formatedHTMLworkTitle, formatedHTMLworkDates, formatedHTMLworkLocation, formatedHTMLworkDescription);
})

//Projects

$('#projects').append(HTMLprojectStart);
projects.projects.forEach(el => {
  let formatedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', el.title);
  let formaterHTMLprojectDates = HTMLprojectDates.replace('%data%', el.dates);
  let formatedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', el.description);
  $('.project-entry').append(formatedHTMLprojectTitle, formaterHTMLprojectDates, formatedHTMLprojectDescription);
  el.images.forEach(elem => {
    let formatedHTMLprojectImage = HTMLprojectImage.replace('%data%', elem);
    $('.project-entry').append(formatedHTMLprojectImage);
  })
})

//Education

$('#education').append(HTMLschoolStart);
education.schools.forEach(el => {
  let formatedHTMLschoolName = HTMLschoolName.replace('%data%', el.name);
  let formatedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', el.degree);
  let formatedHTMLschoolDates = HTMLschoolDates.replace('%data%', el.dates);
  let formatedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', el.location);
  $('.education-entry').append(formatedHTMLschoolName + formatedHTMLschoolDegree, formatedHTMLschoolDates, formatedHTMLschoolLocation);
  el.majors.forEach(elem => {
    let formatedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', elem);
    $('.education-entry').append(formatedHTMLschoolMajor);
  })
})

$('.education-entry').append(HTMLonlineClasses);
education.onlineCourses.forEach(el => {
  let formatedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', el.title);
  let formatedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', el.school)
  let formatedHTMLonlineDates = HTMLonlineDates.replace('%data%', el.dates);
  let formatedHTMLonlineURL = HTMLonlineURL.replace('%data%', el.url);
  $('.education-entry').append(formatedHTMLonlineTitle + formatedHTMLonlineSchool, formatedHTMLonlineDates, formatedHTMLonlineURL);
})

//Google map
$('#mapDiv').append(googleMap);
function initMap() {
  const mapContainer = document.getElementById('map')
  const coordinates = { lat: 40.7127753, lng: -74.0059728 }
  const correctZoom = 12
  const map = new google.maps.Map(mapContainer, {
    center: coordinates,
    zoom: correctZoom,
  });
  const market = new google.maps.Marker({
    position: coordinates,
    map: map,
  });
}
window.initMap = initMap;