import Controller from './Controller';
import { jobListings } from './data';
const container = document.getElementById('app');

const app = new Controller(container); //create new instance of Controller class
const clearBtn = document.querySelector('.clear-btn');
//set filters object
<<<<<<< HEAD
// const filters = { roles: [], languages: [], levels: [] };
const filters = [];
=======
const filters = [];

>>>>>>> 16b13b9a78072c1885fdfbfc3051f2bd711beda4
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

//function
function getFilteredJobs() {
<<<<<<< HEAD
  const filteredJobs = jobs.filter(job => {
    let count = 0;
    for (const elm in filters) {
      if (
        job.level === elm ||
        job.languages.includes(elm) ||
        job.role === elm
      ) {
        count++;
      }
    }
    if (filters.length === count) {
=======
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
>>>>>>> 16b13b9a78072c1885fdfbfc3051f2bd711beda4
      return job;
    }
  });
  return filteredJobs;
}

// function getFilteredJobs() {
//   let filteredJobs;
//   if (
//     (filters.roles.length !== 0 && filters.languages.length === 0) ||
//     filters.levels.length === 0
//   ) {
//     filteredJobs = jobListings.filter(job => filters.roles.includes(job.role));
//   }
//   if (
//     filters.roles.length !== 0 &&
//     filters.languages.length !== 0 &&
//     filters.levels.length === 0
//   ) {
//     filteredJobs = jobListings.filter(
//       job =>
//         filters.roles.includes(job.role) &&
//         filters.languages.every(language => job.languages.includes(language))
//     );
//   }
//   if (
//     filters.roles.length !== 0 &&
//     filters.languages.length !== 0 &&
//     filters.levels.length !== 0
//   ) {
//     filteredJobs = jobListings.filter(
//       job =>
//         filters.roles.includes(job.role) &&
//         filters.levels.includes(job.level) &&
//         filters.languages.every(language => job.languages.includes(language))
//     );
//   }

//   return filteredJobs;
// }

//helper function
function addToFilter(value) {
  if (filters.includes(value)) return;
  filters.push(value);
}
