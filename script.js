/* Jonathan Brackman portfolio — interactions */

const PROJECTS = [
  {
    type: "Work",
    typeClass: "work",
    title: "SkyCarrier",
    blurb: "Main project I worked on at Teledyne FLIR Defense.",
    image: "assets/skycarrier-hero.jpg",
    imageAlt: "SkyCarrier autonomous drone launch and recovery system",
    modalImage: "assets/skycarrier-hero.jpg",
    modalImageAlt: "SkyCarrier autonomous drone launch and recovery system",
    skills: ["Leadership", "Communication", "Mechanical Design", "Welding Design", "Design for Manufacturability", "DFA"],
    body: [
      {
        heading: "What Is It?",
        html: "<p>It provides secure, remote drone storage along with autonomous launch and recovery&mdash;on the move and in GPS-denied environments. Designed for high-speed operations, it enables drones to take off and land while in motion, even across rugged terrain with inclines exceeding 20&deg;. The system supports true free flight with onboard recharging and extended battery life, reducing operational costs by minimizing the need for constant monitoring, fuel, and additional personnel or vehicles. Check out the video below to see the product:</p>" +
          "<div class=\"video-wrap\"><iframe src=\"https://www.youtube.com/embed/qa85Hi5ndg4\" title=\"SkyCarrier: The Future of Autonomous Drone Launch &amp; Recovery &mdash; Teledyne FLIR\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
      },
      {
        heading: "My Contributions",
        html: "<p>Spearheaded a project to redesign the power supply unit (PSU) duct cooling system. Worked with a multidisciplinary team to ensure all criteria were met. Discussed with 3rd party manufacturers on design for manufacturability (DFM) and design for assembly (DFA) improvements, as well as ensured manufacturing deadlines were met. Used skills in GD&amp;T and manufacturing knowledge to ensure the drawings were clear. Implemented ideas that eliminated the need for fasteners and allowed for easier assembly in the final stages.</p>" +
          "<p>Designed a TER cover that protected the system while not inhibiting airflow. Implemented ideas such as louvres and laser cutting to simplify design while also keeping the entire product simple to manufacture.</p>" +
          "<p>Designed cable carrier system and box trim products that eliminated cable snagging in early prototypes. Some of these ideas were carried over and implemented into the final products.</p>" +
          "<p>Designed the I/O panel in cooperation with electrical engineers to ensure their needs were met.</p>"
      }
    ]
  },
  {
    type: "Personal",
    typeClass: "personal",
    title: "Automatic Drink Mixer",
    blurb: "Used 2 DC motor pumps controlled by an arduino and activated by a distance sensor to dispense a mixture of 2 liquids automatically.",
    image: "assets/drink-1.jpg",
    imageAlt: "Automatic drink mixer with two liquid containers and pumps",
    skills: ["Circuit Design", "3D Printing", "Arduino"],
    body: [
      {
        heading: "What Is It?",
        html: "<figure class=\"modal-figure\"><img src=\"assets/drink-1.jpg\" alt=\"Automatic drink mixer with two liquid containers and pumps\" loading=\"lazy\"></figure>" +
          "<ul>" +
          "<li>An automatic drink dispenser that mixes two separate drinks of differing quantities once a cup is placed in front of a sensor.</li>" +
          "<li>Designed and 3D printed a frame to hold all the cups and hardware.</li>" +
          "</ul>" +
          "<figure class=\"modal-figure\"><img src=\"assets/drink-2.jpg\" alt=\"3D printed frame holding the drink mixer hardware\" loading=\"lazy\"></figure>" +
          "<ul>" +
          "<li>Designed a circuit and programmed an Arduino to run the motor for different times depending on what drink was wanted to be dispensed. The system was activated using a distance sensor and would start once a cup was placed beneath.</li>" +
          "<li>Used soldering skills to connect DC motors to the rest of the system, ensuring a consistent connection.</li>" +
          "</ul>" +
          "<figure class=\"modal-figure\"><img src=\"assets/solder.jpg\" alt=\"Soldered DC motor wiring for the drink mixer\" loading=\"lazy\"></figure>"
      },
      {
        heading: "Why Make It?",
        html: "<ul>" +
          "<li>Interesting way to use the design and 3D printing skills I have learned throughout my academic career, and integrate them with new skills in Arduino and circuit design.</li>" +
          "<li>Project I have wanted to do for a long time, and really cool thing to have in the house.</li>" +
          "</ul>"
      }
    ]
  },
  {
    type: "Work",
    typeClass: "work",
    title: "Material Tool Cart",
    blurb: "Designed a material cart designed to carry 10,000 lbs. of 40 ft. insulated piping up and down the assembly line.",
    image: "assets/material-cart.png",
    imageAlt: "Material tool cart engineering drawing",
    skills: ["DFM", "DFA", "Machining", "Welding Design", "Project Management"],
    body: [
      {
        heading: "What Is It?",
        html: "<p>A material tool cart made out of HSS steel that was designed to carry 10,000 lbs. of 40ft. insulated piping safely.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/material-cart.png\" alt=\"Material tool cart engineering drawing\" loading=\"lazy\"></figure>"
      },
      {
        heading: "Why Make It?",
        html: "<p>Part of a new production line for oil companies using the insulated piping. Allowed me to lead a project and add value to operations.</p>"
      },
      {
        heading: "My Contributions",
        html: "<ul>" +
          "<li>Led a team of in-house welders and machinists to ensure the product was easy to assemble and drawings were understandable.</li>" +
          "</ul>" +
          "<figure class=\"modal-figure\"><img src=\"assets/material-cart-2.png\" alt=\"Post-weld check drawing of the material tool cart\" loading=\"lazy\"></figure>" +
          "<ul>" +
          "<li>Ensured all parties were happy with the design and that the deadlines were clear and achievable.</li>" +
          "<li>Designed in SOLIDWORKS using the weldment feature. FEA analysis was done to ensure the cart was safe for operation.</li>" +
          "<li>The project finished manufacturing in March 2025 and is still working today.</li>" +
          "</ul>"
      }
    ]
  },
  {
    type: "Personal",
    typeClass: "personal",
    title: "3D Printing Projects",
    blurb: "Designed and 3D printed several projects for personal projects and work.",
    image: "assets/mini-flir-drone.jpg",
    imageAlt: "Mini 3D printed R70 FLIR drone model",
    skills: ["SOLIDWORKS", "3D Printing"],
    body: [
      {
        heading: "Mini R70 FLIR Drone",
        html: "<p>Worked with the previous co-op student to have a mini version of the R70 drone printed and distributed to customers for advertising purposes.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/mini-flir-drone.jpg\" alt=\"Mini 3D printed R70 FLIR drone model\" loading=\"lazy\"></figure>"
      },
      {
        heading: "Blue Jays World Series Trophies",
        html: "<p>Designed and printed Blue Jays trophies for the in-office score guessing competition. Mixed different types of filaments to get the proper shine effect and logo colours.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/jays-trophies.jpg\" alt=\"3D printed Blue Jays World Series trophies\" loading=\"lazy\"></figure>"
      },
      {
        heading: "Porsche Logo",
        html: "<p>My coworker lost the logo on their Porsche, so I designed a new one for them that they can put on their car.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/porsche-logo.jpg\" alt=\"3D printed replacement Porsche logo\" loading=\"lazy\"></figure>"
      },
      {
        heading: "Coffee Coaster",
        html: "<p>Felt bad that coffee stains were being left on everyone's desk, so I designed a simple 3D printable coffee coaster with the Teledyne FLIR logo for people in the office.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/coaster.jpg\" alt=\"3D printed coffee coaster with Teledyne FLIR logo\" loading=\"lazy\"></figure>"
      }
    ]
  },
  {
    type: "School",
    typeClass: "school",
    title: "Robotic Blackjack Dealer",
    blurb: "Developed a robotic blackjack dealer capable of dealing and counting cards to determine a winner. Wrote the dealer code in C++, enabling it to perform complex tasks such as splitting, doubling, and suggesting optimal player actions based on the \u201cbook\u201d.",
    image: "assets/blackjack-dealer.jpg",
    imageAlt: "Robotic blackjack dealer",
    skills: ["C++", "Mechanical Design"],
    body: [
      {
        heading: "What Is It?",
        html: "<p>1st year design project aimed at creating a robotic blackjack dealer that could do all the actions of a normal human dealer and even give suggestions for player actions.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/blackjack-dealer.jpg\" alt=\"Robotic blackjack dealer\" loading=\"lazy\"></figure>"
      },
      {
        heading: "My Contributions",
        html: "<ul>" +
          "<li>Used a flywheel sensor to dispense cards with a 98% success rate. The dealer dealt one card to itself and then drove across the table to deal the player cards and ask for the options of hit, stand, split, and double. Integrated the \u201cbook\u201d into the dealer code, allowing the dealer to give the player a suggestion on the best move in the current situation.</li>" +
          "<li>Used a colour sensor to determine the numbers on each card dealt, and used a distance sensor to control how far the dealer drove to the player.</li>" +
          "</ul>"
      },
      {
        heading: "Why Make It?",
        html: "<ul>" +
          "<li>Despite being an academic project, this robot was a challenging problem that pushed my design skills and was fun to make.</li>" +
          "<li>Could improve it by not allowing the player to see the next card.</li>" +
          "</ul>" +
          "<p><em>Note: the original page included a demo video, but the video file did not transfer over, so it is not embedded here.</em></p>"
      }
    ]
  },
  {
    type: "Work",
    typeClass: "work",
    title: "Helical Cutterhead",
    blurb: "Designed and manufactured custom helical cutterheads for planer machines. Used SOLIDWORKS skills to develop a 3D model and then transitioned that model into manufacturing drawings.",
    image: "assets/helical-cutterhead.png",
    imageAlt: "Helical cutterhead 3D model and drawings",
    skills: ["SOLIDWORKS", "DFM", "DFA"],
    body: [
      {
        heading: "What Is It?",
        html: "<p>A product designed for a wood planer that delivers a cleaner and quieter cut.</p>" +
          "<figure class=\"modal-figure\"><img src=\"assets/helical-cutterhead.png\" alt=\"Helical cutterhead 3D model and drawings\" loading=\"lazy\"></figure>"
      },
      {
        heading: "My Contributions",
        html: "<ul>" +
          "<li>Used design and drawing skills to make a 3D model of a helical cutterhead. Worked with manufacturers to ensure the design was manufacturable and drawings were clear and easy to read.</li>" +
          "<li>Made installation manuals and videos for these products to increase customer satisfaction.</li>" +
          "</ul>"
      }
    ]
  }
];

(function () {
  "use strict";

  /* ---- Project cards ---- */
  var grid = document.getElementById("projectGrid");
  PROJECTS.forEach(function (p, i) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "project-card reveal";
    card.setAttribute("aria-label", "Open details for " + p.title);
    card.innerHTML =
      '<span class="project-thumb"><img src="' + p.image + '" alt="' + p.imageAlt + '" loading="lazy"></span>' +
      '<span class="project-type ' + p.typeClass + '">' + p.type + "</span>" +
      "<h3>" + p.title + "</h3>" +
      '<p class="project-blurb">' + p.blurb + "</p>" +
      '<span class="project-more">Full details</span>';
    card.addEventListener("click", function () { openModal(i); });
    grid.appendChild(card);
  });

  /* ---- Modal ---- */
  var modal = document.getElementById("projectModal");
  var modalType = document.getElementById("modalType");
  var modalTitle = document.getElementById("modalTitle");
  var modalHero = document.getElementById("modalHero");
  var modalTags = document.getElementById("modalTags");
  var modalBody = document.getElementById("modalBody");
  var lastFocused = null;

  function openModal(i) {
    var p = PROJECTS[i];
    modalType.textContent = p.type + " project";
    modalTitle.textContent = p.title;
    if (p.modalImage) {
      modalHero.src = p.modalImage;
      modalHero.alt = p.modalImageAlt || "";
      modalHero.style.display = "block";
    } else {
      modalHero.removeAttribute("src");
      modalHero.style.display = "none";
    }
    modalTags.innerHTML = p.skills.map(function (s) { return "<span>" + s + "</span>"; }).join("");
    modalBody.innerHTML = p.body.map(function (sec) {
      return "<h4>" + sec.heading + "</h4>" + sec.html;
    }).join("");
    lastFocused = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  /* ---- Mobile nav ---- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---- Scroll reveal ---- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

  /* ---- Active nav link ---- */
  var sections = ["experience", "projects", "achievements", "education", "contact"];
  var links = document.querySelectorAll(".nav-link");
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (l) {
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

  /* ---- Footer year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
