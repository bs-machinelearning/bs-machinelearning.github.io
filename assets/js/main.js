// const BRANCH_NAME="refactor/automate-page-creation/";
const BRANCH_NAME="main";
const PATH_TO_ROOT = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 
  window.location.origin : `https://raw.githubusercontent.com/bs-machinelearning/bs-machinelearning.github.io/refs/heads/${BRANCH_NAME}`;

//-----------------FOOTER
function includeFooter() {
  fetch(`${PATH_TO_ROOT}/assets/templates/footer.html`)
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
          console.log('Footer updated')
      });
};

function updateProjects() {
  Promise.all([
    fetch(`${PATH_TO_ROOT}/assets/templates/project-card.html`).then(res => res.text()),
    fetch(`${PATH_TO_ROOT}/assets/projects.json`).then(res => res.json())
  ])
  .then(([templateHTML, projects]) => {
    const container = document.getElementById('project-container');
    // sort projects by attribute "id" in ascending order
    projects.sort((a, b) => b.id - a.id);
    projects.forEach(project => {
      // Create a DOM element from template
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = templateHTML.trim();
      const entry = tempDiv.firstElementChild;

      // Fill in project fields
      entry.querySelector('#project-image').src = `assets/img/proj/${project.image}`;
      entry.querySelector('#project-image').alt = project.title;
      entry.querySelector('#project-type').textContent = project.type || project.content_type || '';
      entry.querySelector('#project-date').textContent = project.date;
      entry.querySelector('#project-date').setAttribute('datetime', project.date);
      entry.querySelector('#project-link').href = `./assets/templates/project-page.html?id=${project.id}`;
      entry.querySelector('#project-link').textContent = project.title.includes(':') ? project.title.split(':')[0] : project.title;

      // Authors
      const authorsDiv = entry.querySelector('#project-authors');
      const authorTemplate = authorsDiv.querySelector('.author-template'); // get template first
      authorsDiv.innerHTML = ''; // then clear

      if (project.authors && Array.isArray(project.authors)) {
        project.authors.forEach(author => {
          const authorNode = authorTemplate.cloneNode(true);
          authorNode.style.display = ''; // Show the cloned node
          authorNode.querySelector('.author-img').src = `assets/img/team/${author.img}`;
          authorNode.querySelector('.author-img').alt = author.name;
          authorNode.querySelector('.author-link').href = author.link;
          authorNode.querySelector('.author-link').textContent = author.name;
          authorsDiv.appendChild(authorNode);
        });
      }

      // Append to container
      container.appendChild(entry);
    });
    console.log('Projects updated');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
};


function updateTheses(){
  fetch(`${PATH_TO_ROOT}/assets/theses.json`)
    .then(response => response.json())
    .then(data => {
      delay = 0
      data.forEach(project => {
        console.log(project)
        const { title, course, author, supervisor, thesis_link, author_link } = project;
        // Initialize projectHTML with the common elements
        var thesisHTML = `
            <!-- ${author} -->
            <div class="col-lg-4" data-aos="zoom-in">
              <article>
                  <p class="post-category">${course}</p>
                  <h2 class="title">
                  <a href="${thesis_link}">${title}</a>
                  </h2>
                  <div class="d-flex align-items-center">
                  <div class="post-meta">
                      <p class="post-author"><a href="${author_link}">${author}</a></p>
                      <p class="post-author">${supervisor}</p>
                  </div>
                  </div>
              </article>
            </div>
        `;
        delay += 25

        // Append the projectHTML to the project list
        document.getElementById('theses-container').innerHTML += thesisHTML;
        console.log('Thesis list updated')
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

function updateEvents(){
  fetch(`${PATH_TO_ROOT}/assets/events.json`)
    .then(response => response.json())
    .then(data => {
      delay = 0
      data.forEach(project => {
        const { 
          title,
          main_image,
          html_page,
          date
        } = project;
        var projectHTML = `
          <div class="blog-post col-12 col-sm-12 col-md-6	col-lg-6 col-xl-4" data-aos="zoom-in">
            <article>
    
              <div class="post-img">
                <img src="assets/img/events/${main_image}" alt="" class="img-fluid">
              </div>
    
              <p class="post-category">${date}</p>
    
              <h2 class="title">
                <a href="./event-pages/${html_page}">${title}</a>
              </h2>
            
            </article>
          </div>    
        `;
        delay += 25

        // Append the projectHTML to the project list
        document.getElementById('events-container').innerHTML += projectHTML;
      });
    console.log('Events updated')
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

function updateHackathons(){
  fetch(`${PATH_TO_ROOT}/assets/hackathons.json`)
    .then(response => response.json())
    .then(data => {
      delay = 0
      data.forEach(project => {
        const { 
          title,
          main_image,
          html_page,
          date
        } = project;
        var projectHTML = `
          <div class="blog-post col-12 col-sm-12 col-md-6	col-lg-6 col-xl-4" data-aos="zoom-in">
            <article>
    
              <div class="post-img">
                <img src="assets/img/events/${main_image}" alt="" class="img-fluid">
              </div>
    
              <p class="post-category">${date}</p>
    
              <h2 class="title">
                <a href="./hackathon-pages/${html_page}">${title}</a>
              </h2>
            
            </article>
          </div>    
        `;
        delay += 25

        // Append the projectHTML to the project list
        document.getElementById('hackathons-container').innerHTML += projectHTML;
      });
    console.log('Hackathons updated')
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

function updateProjectPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  if (!projectId) return;

  Promise.all([
    fetch(`${PATH_TO_ROOT}/assets/projects.json`).then(res => res.json()),
    fetch(`${PATH_TO_ROOT}/project-pages/${projectId}.md`)
      .then(res => {
        if (!res.ok) {
          // Custom error message for missing markdown file
          return null;
        }
        return res.text();
      })
  ])
  .then(([projects, markdownContent]) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
      document.body.innerHTML = '<h2>Project not found.</h2>';
      return;
    }
    // Set project title and date
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('page-meta-title').textContent = `BSML | ${project.title}`;
    document.getElementById('project-date').textContent = project.date;
    document.getElementById('project-date').setAttribute('datetime', project.date);

    // Inject markdown content or custom error
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (markdownContent === null) {
      // Do nothing
      } else {
      mainContent.innerHTML += marked.parse(markdownContent);
      }
    }
    
    // Authors list (top)
    const authorsList = document.getElementById('authors-list');
    const authorTemplate = authorsList.querySelector('.author-template');
    project.authors.forEach(author => {
      const node = authorTemplate.cloneNode(true);
      node.style.display = '';
      const link = node.querySelector('.author-link');
      link.href = author.link;
      link.textContent = author.name;
      authorsList.append(node);
    });
    authorTemplate.remove();

    // Author profiles (bottom)
    const authorContainer = document.getElementById('author-container');
    const profileTemplate = authorContainer.querySelector('.author-profile-template');
    project.authors.forEach(author => {
      const profile = profileTemplate.cloneNode(true);
      profile.style.display = '';
      profile.querySelector('.author-img').src = `../img/team/${author.img}`;
      profile.querySelector('.author-img').alt = author.name;
      profile.querySelector('.author-name').textContent = author.name;
      profile.querySelector('.author-link').href = author.link;
      profile.querySelector('.author-desc').textContent = author.title;
      authorContainer.appendChild(profile);
    });
    profileTemplate.remove();

    // Buttons
    const buttonsDiv = document.getElementById('main-buttons');
    const buttonTemplate = buttonsDiv.querySelector('.button-template');
    project.buttons.forEach(btn => {
      const btnNode = buttonTemplate.cloneNode(true);
      btnNode.style.display = '';
      btnNode.href = btn.link;
      btnNode.textContent = btn.name;
      buttonsDiv.appendChild(btnNode);
    });
    buttonTemplate.remove();

    // Set project image
    const postImg = document.querySelector('.post-img img');
    if (postImg) {
      postImg.src = `../img/proj/${project.image}`;
      postImg.alt = project.title;
    }
  })
  .catch(error => {
    document.body.innerHTML = `<h2>Error loading project: ${error}</h2>`;
  });
}

// Call this function if on project-page.html
window.onload = function() {
  var path = window.location.pathname;
  if (path.includes('project-page.html')) {
    updateProjectPage();
  } else if (path.includes('theses.html')) {
      updateTheses();
  } else if (path.includes('projects.html')) {
      updateProjects();
  } else if (path.includes('events.html')) {
      updateEvents();
  } else if (path.includes('hackathons.html')) {
      updateHackathons();
};
};

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    includeFooter();
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();