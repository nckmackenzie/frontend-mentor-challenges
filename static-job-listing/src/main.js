import Controller from './Controller';
import { jobListings } from './data';
const container = document.getElementById('app');

const app = new Controller(container); //create new instance of Controller class
const clearBtn = document.querySelector('.clear-btn');
//set filters object
const filters = [];

//set all jobs on load
app.setJobs(jobListings);

//use event delegation to check if a 'filter-pill' is clicked
document.querySelector('section').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-pills')) return;
  addToFilter(e.target.textContent);
  let filteredJobs = getFilteredJobs();
  app.setFilters(filteredJobs, filters);
});

//clear filter
document.querySelector('.filter-box').addEventListener('click', e => {
  if (!e.target.classList.contains('remove-filter')) return;
  const clickedFilter = e.target.previousElementSibling.textContent;
  const i = filters.findIndex(index => index === clickedFilter);
  filters.splice(i, 1);
  if (filters.length) {
    let filteredJobs = getFilteredJobs();
    app.setFilters(filteredJobs, filters);
  } else {
    app.clearFilters(jobListings);
  }
});

//clear filters
clearBtn.addEventListener('click', () => {
  app.clearFilters(jobListings);
});

function getFilteredJobs() {
  const filteredJobs = jobListings.filter(job => {
    let cnt = 0;
    for (let i = 0; i < filters.length; i++) {
      if (
        job.languages.includes(filters[i]) ||
        job.role === filters[i] ||
        job.level === filters[i]
      ) {
        cnt++;
      }
    }
    if (filters.length == cnt) {
      return job;
    }
  });
  return filteredJobs;
}

//helper function
function addToFilter(value) {
  if (filters.includes(value)) return;
  filters.push(value);
}
