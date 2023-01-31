class Controller {
  #filterBox;
  #listings;
  #container;
  #filters;
  constructor(app) {
    this.#container = app;
    this.#renderHeader();
  }

  #renderHeader() {
    const html = `<header
    class="w-full h-36 bg-hero-pattern-mobile lg:bg-hero-pattern-desktop bg-no-repeat bg-primary"
  ></header>`;
    this.#container.insertAdjacentHTML('beforebegin', html);
    this.#container.insertAdjacentHTML('afterbegin', this.#main());
    this.#filterBox = document.querySelector('.filter-box');
    this.#filters = document.querySelector('.filters');
    this.#listings = document.querySelector('section');
  }

  //set main and container elements
  #main() {
    const html = `
      <main>
        <div class="container">
          <div class="w-full relative h-16 hidden">
            <div class="filter-box">
              <div class="filters"></div>
              <button class="clear-btn">Clear</button>
            </div>
          </div>
          <section class="pt-8 flex flex-col gap-4"></section>
        </div>
      </main>
    `;
    return html;
  }

  //append jobs
  setJobs(jobs) {
    this.#renderJobs(jobs);
  }

  //clear jobs
  #clearListings() {
    this.#listings.innerHTML = '';
  }

  #jobsMarkUp(job) {
    //prettier-ignore
    const { featured, logo, company, position, contract, location, postedAt,new : newPositing,role,level,languages } =
      job;
    return `
      <div class="card ${featured ? 'featured' : ''}">
        <div class="flex gap-4 items-center">
          <img src=${logo} alt=${company} class="logo" />
          <div class="flex flex-col gap-1 mt-5 lg:mt-0">
            <div class="flex gap-1 items-center">
              <div class="text-primary text-[12px]">${company}</div>
              ${newPositing ? '<span class="new-pill">new!</span>' : ''}
              ${featured ? '<span class="featured-pill">Featured</span>' : ''}
            </div>
            <p class="text-primary text-app font-bold">${position}</p>
            <div class="flex items-center gap-4 text-[12px] text-grayish-cyan-600">
              <div class="">${postedAt}</div>
              <div>${contract}</div>
              <div>${location}</div>
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center flex-wrap">
          <span class="filter-pills role">${role}</span>
          <span class="filter-pills level">${level}</span>
         ${this.#renderLanguages(languages)}
        </div>
      </div>
    `;
  }

  //method to render jobs listings
  #renderJobs(jobs) {
    this.#clearListings();
    jobs.forEach(job => {
      // this.#jobsMarkUp(job);
      this.#listings.insertAdjacentHTML('beforeend', this.#jobsMarkUp(job));
    });
  }

  #renderLanguages(array) {
    let html = '';
    array.forEach(arry => {
      html += `<span class="filter-pills language">${arry}</span>`;
    });
    return html;
  }

  setFilters(jobs, filters) {
    this.#filterBox.parentElement.classList.remove('hidden');
    this.#listings.classList.remove('pt-8');
    this.#listings.classList.add('pt-4');
    this.#renderJobs(jobs);
    this.#setFilterTabs(filters);
  }

  clearFilters(jobs) {
    this.#filterBox.parentElement.classList.add('hidden');
    this.#filters.innerHTML = '';
    this.#listings.classList.remove('pt-4');
    this.#listings.classList.add('pt-8');
    this.#renderJobs(jobs);
  }

  #setFilterTabs(filters) {
    this.#filters.innerHTML = '';
    filters.forEach(filter => {
      let html = `<div class="flex">
      <div class="bg-grayish-cyan-400 text-primary text-small flex items-center px-1">${filter}</div>
      <button class="remove-filter">&times;</button>
    </div>`;
      this.#filters.insertAdjacentHTML('beforeend', html);
    });

    // return html;
  }
}

export default Controller;
