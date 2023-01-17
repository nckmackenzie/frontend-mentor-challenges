import Controller from './Controller';
import { jobListings } from './data';
const container = document.getElementById('app');

const app = new Controller(container); //create new instance of Controller class
//set filters object
const filters = { roles: [], languages: [], levels: [] };

//set all jobs on load
app.setJobs(jobListings);

//use event delegation to check if a 'filter-pill' is clicked
document.querySelector('section').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-pills')) return;
  addToFilter(e.target.textContent, e.target.classList[1]);
  let filteredJobs = getFilteredJobs();
  console.log(filteredJobs);
  console.log(filters);
  // app.setFilters(filteredJobs);
  // if (
  //   (filters.roles.length > 0 && filters.languages.length === 0) ||
  //   filters.levels.length === 0
  // ) {
  //   filteredJobs = jobListings.filter(job => filters.roles.includes(job.role));
  // }
  // // const filteredJobs = jobListings.filter(
  // //   job =>
  // //     filters.roles.includes(job.role) &&
  // //     filters.levels.includes(job.level) &&
  // //     filters.languages.every(language => job.languages.includes(language))
  // // );
  // app.setFilters(filteredJobs);
});

function getFilteredJobs() {
  let filteredJobs;
  if (
    (filters.roles.length !== 0 && filters.languages.length === 0) ||
    filters.levels.length === 0
  ) {
    filteredJobs = jobListings.filter(job => filters.roles.includes(job.role));
  }
  if (
    filters.roles.length !== 0 &&
    filters.languages.length !== 0 &&
    filters.levels.length === 0
  ) {
    filteredJobs = jobListings.filter(
      job =>
        filters.roles.includes(job.role) &&
        filters.languages.every(language => job.languages.includes(language))
    );
  }
  if (
    filters.roles.length !== 0 &&
    filters.languages.length !== 0 &&
    filters.levels.length !== 0
  ) {
    filteredJobs = jobListings.filter(
      job =>
        filters.roles.includes(job.role) &&
        filters.levels.includes(job.level) &&
        filters.languages.every(language => job.languages.includes(language))
    );
  }

  return filteredJobs;
}

//helper function
function addToFilter(value, type) {
  const filterKey = `${type}s`;
  if (filters[filterKey].includes(value)) return;
  filters[filterKey].push(value);
}
