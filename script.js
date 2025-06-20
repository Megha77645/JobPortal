document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const menu = document.querySelector('.menu');
    const files = document.querySelector('.files');
    
    mobileMenuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        files.classList.toggle('active');
        
        // Change icon between hamburger and X
        if (menu.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times">s</i>';
        } else {
            this.innerHTML = '<i class="fas fa-bars">s</i>';
        }
    });
});

const jobs = [
  {
    id: 1,
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgolden.com%2Fwiki%2FSegment_%2528company%2529-AMB58WM&psig=AOvVaw1lWDLxgihrS7fLPUNQj6P3&ust=1749789197551000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjqoO6G640DFQAAAAAdAAAAABAE",
    time: "11 hours ago",
    posted: "Posted 1 hour ago",
    expiration: "April 06, 2021",
    salary: "$35k - $45k",
    tags: [
      { text: "Full Time", class: "fulltime" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "#",
    description: `As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent and help to design beautiful interface.`,
    responsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design"
    ],
    skills: [
      "You have at least 3 years’ experience working as a Product Designer.",
      "You have experience using Sketch and InVision or Framer X",
      "You have some previous experience working in an agile environment — Think two-week sprints.",
      "You are familiar using Jira and Confluence in your workflow"
    ]
  },
  {
    id: 2,
    title: "Recruiting Coordinator",
    company: "Catalyst",
    location: "London, UK",
    logo: "https://i.imgur.com/vHjVx2z.png",
    time: "8 hours ago",
    posted: "Posted 2 hours ago",
    expiration: "June 18, 2025",
    salary: "$32k - $40k",
    tags: [
      { text: "Freelancer", class: "freelancer" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "#",
    description: `As a Recruiting Coordinator, you'll support the talent acquisition team in scheduling interviews, communicating with candidates, and ensuring a seamless hiring process.`,
    responsibilities: [
      "Schedule and coordinate interviews between candidates and hiring managers.",
      "Communicate effectively with candidates and internal stakeholders.",
      "Maintain accurate records of candidate interactions and interview feedback."
    ],
    skills: [
      "Bachelor’s degree or equivalent work experience.",
      "Excellent organizational and communication skills.",
      "Experience with applicant tracking systems (ATS) preferred."
    ]
  },
  {
    id: 3,
    title: "Product Manager, Studio",
    company: "Invision",
    location: "London, UK",
    logo: "https://i.imgur.com/7yUvePI.png",
    time: "7 hours ago",
    posted: "Posted 4 hours ago",
    expiration: "June 25, 2025",
    salary: "$38k - $50k",
    tags: [
      { text: "Part Time", class: "parttime" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "#",
    description: `As a Product Manager, you will drive the vision, strategy, and roadmap for Invision’s Studio product. You will work with cross-functional teams to deliver features.`,
    responsibilities: [
      "Define product vision and strategy for Studio.",
      "Work closely with design, engineering, and marketing teams.",
      "Gather and prioritize requirements from stakeholders and users."
    ],
    skills: [
      "Proven experience as a Product Manager.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and leadership abilities."
    ]
  },
  {
    id: 4,
    title: "Senior Product Designer",
    company: "Upwork",
    location: "London, UK",
    logo: "https://i.imgur.com/FTkD1TU.png",
    time: "6 hours ago",
    posted: "Posted 2 hours ago",
    expiration: "June 30, 2025",
    salary: "$45k - $60k",
    tags: [
      { text: "Temporary", class: "temporary" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "#",
    description: `As a Senior Product Designer at Upwork, you will lead UX initiatives and collaborate with cross-functional teams to deliver intuitive and impactful product experiences.`,
    responsibilities: [
      "Lead design projects from concept to launch.",
      "Collaborate with product managers, developers, and stakeholders.",
      "Advocate for the user through research and data-driven insights."
    ],
    skills: [
      "5+ years’ experience in product design.",
      "Expertise in Figma, Sketch, or similar tools.",
      "Strong portfolio showcasing end-to-end product design."
    ]
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Spotify",
    location: "London, UK",
    logo: "https://i.imgur.com/8Km9tLL.png",
    time: "9 hours ago",
    posted: "Posted 3 hours ago",
    expiration: "July 10, 2025",
    salary: "$50k - $65k",
    tags: [
      { text: "Full Time", class: "fulltime" },
      { text: "Urgent", class: "urgent" },
      { text: "Private", class: "private" }
    ],
    apply_url: "#",
    description: `Spotify is looking for a Data Analyst to support our business intelligence team. You will help to analyze user data, generate reports, and provide actionable insights.`,
    responsibilities: [
      "Analyze and interpret complex data sets.",
      "Create reports and dashboards for business teams.",
      "Work with cross-functional stakeholders to identify opportunities."
    ],
    skills: [
      "Experience with SQL and data visualization tools.",
      "Strong analytical and critical thinking skills.",
      "Excellent communication and presentation abilities."
    ]
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Figma",
    location: "London, UK",
    logo: "https://i.imgur.com/WR1a7u7.png",
    time: "10 hours ago",
    posted: "Posted 30 minutes ago",
    expiration: "July 15, 2025",
    salary: "$40k - $55k",
    tags: [
      { text: "Part Time", class: "parttime" },
      { text: "Private", class: "private" }
    ],
    apply_url: "#",
    description: `Join Figma as a UI/UX Designer. You will work with product teams to design compelling user interfaces and experiences that delight our customers globally.`,
    responsibilities: [
      "Design intuitive, beautiful digital user experiences.",
      "Work closely with engineers and product managers.",
      "Conduct usability tests and implement feedback."
    ],
    skills: [
      "2+ years of UI/UX design experience.",
      "Proficiency in Figma, Sketch, or Adobe XD.",
      "Strong portfolio of user-centered design projects."
    ]
  }
];

// --- The rest of your code remains the same ---

function renderJobCards() {
  const grid = document.getElementById('jobsGrid');
  grid.innerHTML = jobs.map(job => `
    <div class="job-card" data-id="${job.id}">
      <div class="job-card-header">
        <img src="${job.logo}" alt="${job.company} logo" class="job-logo"/>
        <div>
          <div class="job-title">${job.title}</div>
        </div>
        <button class="bookmark-btn" title="Save">&#x1F516;</button>
      </div>
      <div class="job-info-row">
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M6 7V6a3 3 0 1 1 6 0v1" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/><rect x="3.5" y="7" width="11" height="7.5" rx="2.5" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.company}</span>
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M9 15c-3.5-3.9-5.25-6.3-5.25-8.25A4.25 4.25 0 0 1 9 2.5a4.25 4.25 0 0 1 5.25 4.25C14.25 8.7 12.5 11.1 9 15Z" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.location}</span>
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><circle cx="9" cy="9" r="7.5" stroke="#7c7c7c" stroke-width="1.4"/><path d="M9 4.5v5l3.5 2" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/></svg> ${job.time}</span>
        <span class="job-salary"><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M4.5 9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM2.5 9h13M9 13.5V4.5" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.salary}</span>
      </div>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="job-tag ${tag.class}">${tag.text}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderJobModal(job) {
  return `
    <div>
      <div class="job-modal-header">
        <div class="job-modal-header-left">
          <img src="${job.logo}" class="job-modal-logo" alt="${job.company} logo" />
          <div>
            <div class="job-modal-title">${job.title}</div>
            <div class="job-modal-info">
              <span>
                <svg width="20" height="20" fill="none"><path d="M6 7V6a3 3 0 1 1 6 0v1" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/><rect x="3.5" y="7" width="11" height="7.5" rx="2.5" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.company}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><path d="M9 15c-3.5-3.9-5.25-6.3-5.25-8.25A4.25 4.25 0 0 1 9 2.5a4.25 4.25 0 0 1 5.25 4.25C14.25 8.7 12.5 11.1 9 15Z" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.location}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#7c7c7c" stroke-width="1.4"/><path d="M9 4.5v5l3.5 2" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/></svg>
                ${job.time}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><path d="M4.5 9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM2.5 9h13M9 13.5V4.5" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.salary}
              </span>
            </div>
            <div class="job-modal-tags">
              ${job.tags.map(tag => `<span class="job-tag ${tag.class}">${tag.text}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="job-modal-header-right">
          <a href="${job.apply_url}" class="job-modal-apply-btn" target="_blank">Apply For Job</a>
          <button class="job-modal-bookmark">&#x1F516;</button>
        </div>
      </div>
      <div class="job-modal-body-row">
        <div class="job-modal-body-left">
          <div class="job-modal-section">
            <div class="job-modal-section-title">Job Description</div>
            <div class="job-modal-section-content">${job.description}</div>
          </div>
          <div class="job-modal-section">
            <div class="job-modal-section-title">Key Responsibilities</div>
            <ul class="job-modal-list">${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="job-modal-section">
            <div class="job-modal-section-title">Skill & Experience</div>
            <ul class="job-modal-list">${job.skills.map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="job-modal-body-right">
          <div class="job-modal-overview-box">
            <div class="job-modal-overview-title">Job Overview</div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><rect x="4" y="6" width="16" height="14" rx="2" stroke="#3b82f6" stroke-width="1.6"/><path d="M8 2v4" stroke="#3b82f6" stroke-width="1.6"/><path d="M16 2v4" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Date Posted:</strong><br>
                ${job.posted}
              </span>
            </div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#3b82f6" stroke-width="1.6"/><path d="M12 6v6l4 2" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Expiration date:</strong><br>
                ${job.expiration}
              </span>
            </div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#3b82f6" stroke-width="1.6"/><circle cx="12" cy="12" r="3" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Location:</strong><br>
                ${job.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupModalLogic() {
  const overlay = document.getElementById('jobModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const content = document.getElementById('modalContent');
  document.getElementById('jobsGrid').addEventListener('click', function(e) {
    let card = e.target.closest('.job-card');
    if (card) {
      const jobId = +card.getAttribute('data-id');
      const job = jobs.find(j => j.id === jobId);
      if (job) {
        content.innerHTML = renderJobModal(job);
        overlay.classList.add('active');
        document.body.classList.add('modal-open');
      }
    }
  });
  closeBtn.onclick = () => overlay.classList.remove('active');
  document.body.classList.remove('modal-open');
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderJobCards();
  setupModalLogic();
});2








//Feedback Akanksha
document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.querySelector('.feedback-slideshow');
    const row = document.querySelector('.feedback-row');
    const containers = document.querySelectorAll('.feedback-container');
    const containerWidth = document.querySelector('.feedback-container').offsetWidth;
    const gap = 20;
    let currentPosition = 0;
    let slideInterval;

    // Set initial position to show first two feedbacks
    row.style.transform = `translateX(0)`;

    function slideToNext() {
        // Calculate the width of two containers plus gap
        const slideWidth = (containerWidth + gap) * 2;

        // If we're at the first position (showing first two feedbacks)
        if (currentPosition === 0) {
            currentPosition = -slideWidth; // Move to show third feedback
        } else {
            currentPosition = 0; // Return to first position
        }

        row.style.transform = `translateX(${currentPosition}px)`;
    }

    function startSlideShow() {
        // Start with first two feedbacks visible
        currentPosition = 0;
        row.style.transform = `translateX(0)`;

        // Set interval to slide every 6 seconds
        slideInterval = setInterval(slideToNext, 6000);
    }

    // Start the slideshow
    startSlideShow();
});
