/* Jonathan Brackman portfolio — interactions */

const PROJECTS = [
  {
    type: "Work",
    typeClass: "work",
    title: "SkyCarrier",
    blurb: "Secure, remote drone storage with autonomous launch and recovery — designed to deploy drones on the move, even across rugged terrain.",
    skills: ["Leadership", "Communication", "Mechanical Design", "Welding Design", "DFM", "DFA"],
    body: [
      {
        heading: "What it is",
        html: "<p>Main project worked on at Teledyne FLIR Defense. SkyCarrier provides secure, remote drone storage along with autonomous launch and recovery — on the move and in GPS-denied environments. Drones take off and land while the vehicle is in motion, even across rugged terrain with inclines exceeding 20&deg;. Onboard recharging and true free flight extend battery life and cut operational costs by reducing the need for constant monitoring, fuel, and extra personnel or vehicles.</p>"
      },
      {
        heading: "My contributions",
        html: "<ul>" +
          "<li>Spearheaded the redesign of the power supply unit (PSU) duct cooling system with a multidisciplinary team; coordinated with third-party manufacturers on DFM and DFA improvements to meet manufacturing deadlines.</li>" +
          "<li>Applied GD&amp;T and manufacturing knowledge to produce clear, buildable drawings; implemented design changes that eliminated fasteners and eased final assembly.</li>" +
          "<li>Designed a TER cover that protected the system without inhibiting airflow — using louvres and laser cutting to keep the design simple to manufacture.</li>" +
          "<li>Designed a cable carrier system and box trim products that eliminated cable snagging seen in early prototypes; several concepts carried into the final product.</li>" +
          "<li>Designed the I/O panel in collaboration with electrical engineers to meet their requirements.</li>" +
          "</ul>"
      }
    ]
  },
  {
    type: "Personal",
    typeClass: "personal",
    title: "Automatic Drink Mixer",
    blurb: "An Arduino-powered dispenser that mixes two drinks at the press of a cup — place it down, and the sensor does the rest.",
    skills: ["Circuit Design", "3D Printing", "Arduino"],
    body: [
      {
        heading: "What it is",
        html: "<p>An automatic drink dispenser that mixes two separate liquids in differing quantities once a cup is placed in front of a distance sensor. Two DC motor pumps are controlled by an Arduino, which runs the motors for different durations depending on the drink selected.</p><ul>" +
          "<li>Designed and 3D printed a frame to hold the cups and hardware.</li>" +
          "<li>Designed the circuit, programmed the Arduino, and soldered the DC motor connections for consistent, reliable dispensing.</li>" +
          "</ul>"
      },
      {
        heading: "Why I made it",
        html: "<p>A fun way to apply academic design and 3D printing skills while learning Arduino and circuit design — and a long-wanted gadget to have in the house.</p>"
      }
    ]
  },
  {
    type: "Work",
    typeClass: "work",
    title: "Material Tool Cart",
    blurb: "A 10,000 lb capacity HSS steel cart built to carry 40 ft insulated piping safely up and down the assembly line.",
    skills: ["DFM", "DFA", "Machining", "Welding Design", "Project Management"],
    body: [
      {
        heading: "What it is",
        html: "<p>A material tool cart made of HSS steel, designed to carry 10,000&nbsp;lbs of 40&nbsp;ft insulated piping safely. Built as part of a new production line serving oil companies using insulated piping.</p>"
      },
      {
        heading: "My contributions",
        html: "<ul>" +
          "<li>Led the project, coordinating a team of in-house welders and machinists to keep the product easy to assemble and the drawings easy to read.</li>" +
          "<li>Kept all parties aligned with clear, achievable deadlines.</li>" +
          "<li>Designed the cart in SolidWorks using the weldment feature; ran FEA analysis to verify safe operation.</li>" +
          "<li>Manufacturing completed in March 2025, and the cart is still in service today.</li>" +
          "</ul>"
      }
    ]
  },
  {
    type: "Personal",
    typeClass: "personal",
    title: "3D Printing Projects",
    blurb: "A collection of practical and playful prints — drone models, trophies, replacement parts, and shop essentials.",
    skills: ["SolidWorks", "3D Printing"],
    body: [
      {
        heading: "What I printed",
        html: "<ul>" +
          "<li><strong>Mini R70 FLIR Drone</strong> — worked with the previous co-op student to print a scaled-down R70 drone for customers as promotional pieces.</li>" +
          "<li><strong>Blue Jays World Series Trophies</strong> — designed and printed trophies for the in-office score-guessing competition, mixing filaments for proper shine and logo colours.</li>" +
          "<li><strong>Porsche Logo</strong> — a coworker lost the emblem off their Porsche, so I designed and printed a replacement.</li>" +
          "<li><strong>Coffee Coaster</strong> — a simple printable coaster with the Teledyne FLIR logo, made after coffee stains kept appearing on desks.</li>" +
          "</ul>"
      }
    ]
  },
  {
    type: "School",
    typeClass: "school",
    title: "Robotic Blackjack Dealer",
    blurb: "A first-year design project: a robot that deals cards, counts hands, and suggests optimal plays from the book.",
    skills: ["C++", "Mechanical Design"],
    body: [
      {
        heading: "What it is",
        html: "<p>A robotic blackjack dealer that performs every action of a human dealer — and goes further by suggesting player actions. The dealer code is written in C++, enabling complex play like splitting, doubling, and recommending optimal moves based on the &ldquo;book&rdquo;.</p>"
      },
      {
        heading: "How it works",
        html: "<ul>" +
          "<li>A flywheel sensor dispenses cards with a 98% success rate; the dealer deals itself a card, then drives across the table to deal player cards and offer hit, stand, split, and double.</li>" +
          "<li>A colour sensor reads card numbers, and a distance sensor controls how far the dealer travels to each player.</li>" +
          "</ul>"
      },
      {
        heading: "Why I made it",
        html: "<p>A challenging problem that pushed my design skills — and was fun to build. One improvement for next time: don't let the player see the next card.</p>"
      }
    ]
  },
  {
    type: "Work",
    typeClass: "work",
    title: "Helical Cutterhead",
    blurb: "Custom helical cutterheads for planer machines — modeled in SolidWorks and manufactured for a cleaner, quieter cut.",
    skills: ["SolidWorks", "DFM", "DFA"],
    body: [
      {
        heading: "What it is",
        html: "<p>A product for a wood planer that delivers a cleaner and quieter cut than conventional cutterheads.</p>"
      },
      {
        heading: "My contributions",
        html: "<ul>" +
          "<li>Used SolidWorks to develop the 3D model, then translated it into manufacturing drawings.</li>" +
          "<li>Worked with manufacturers to ensure the design was manufacturable and the drawings were clear and readable.</li>" +
          "<li>Created installation manuals and videos to increase customer satisfaction.</li>" +
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
  var modalTags = document.getElementById("modalTags");
  var modalBody = document.getElementById("modalBody");
  var lastFocused = null;

  function openModal(i) {
    var p = PROJECTS[i];
    modalType.textContent = p.type + " project";
    modalTitle.textContent = p.title;
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
  var sections = ["about", "experience", "projects", "education", "contact"];
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
