//-----------------FOOTER
function includeFooter() {
  fetch("https://raw.githubusercontent.com/bs-machinelearning/bs-machinelearning.github.io/refs/heads/main/footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
          console.log('Footer updated')
      });
};

function updateProjects(){
  fetch("https://raw.githubusercontent.com/bs-machinelearning/bs-machinelearning.github.io/refs/heads/main/assets/projects.json")
    .then(response => response.json())
    .then(data => {
      delay = 0
      data.forEach(project => {
        const { 
          title,
          main_image,
          project_page,
          authors,
          authors_img,
          authors_link,
          date,
          content_type
        } = project;
        var projectHTML = `
            <div class="col-12 col-sm-12 col-md-6	col-lg-6 col-xl-4 project-card" data-aos="zoom-in">
              <article>
                  <div class="post-img">
                    <img src="assets/img/proj/${main_image}" alt="" class="img-fluid">
                  </div>

                  <div class = "d-flex flex-row justify-content-between">
                    <p class="post-category">${content_type}</p>
                    <p class="post-date">
                        <time datetime="2022-01-01">${date}</time>
                    </p>
                  </div>
                  
                  <h2 class="title">
                    <a href="./project-pages/${project_page}">${title}</a>
                  </h2>

                  <div class = "container">
                  <div class="post-meta row">
        `

        for (let i = 0; i < authors.length; i++) {
        
          if (authors_img[i] == "na") {
            img = "black_bg.png"
          } else {
            img = "team/" + authors_img[i]
          }

          projectHTML += `
                    <div class="col-6 col-sm-6 col-md-6	col-lg-6 col-xl-6">
                      <div class = "d-flex flex-row align-content-center author-card">
                        <img src="assets/img/${img}" alt="" class="img-fluid post-author-img flex-shrink-0">
                        <div class="d-flex flex-column justify-content-center align-content-center">
                          <p class="post-author">
                            <a href="${authors_link[i]}" target = "blank" >
                              ${authors[i]}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
            `
        }

        projectHTML += `
                  </div>
                  </div>
              </article>
            </div>
        `;
        delay += 25

        // Append the projectHTML to the project list
        document.getElementById('project-container').innerHTML += projectHTML;
      });
    console.log('Projects updated')
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};


function updateTheses(){
  fetch("https://raw.githubusercontent.com/bs-machinelearning/bs-machinelearning.github.io/refs/heads/main/assets/theses.json")
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
        console.log('Thesis list updated from https://raw.githubusercontent.com/bs-machinelearning/bs-machinelearning.github.io/refs/heads/main/assets/theses.json')
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

// if on the correct page, dynamically update list
window.onload = function() {
  var path = window.location.pathname;
  if (path.includes('theses.html')) {
      updateTheses();
  } else if (path.includes('projects.html')) {
      updateProjects();
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

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Init swiper sliders
   */
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