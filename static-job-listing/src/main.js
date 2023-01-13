import Controller from './Controller';
import { jobListings } from './data';
const container = document.getElementById('app');

const app = new Controller(container);
//set filters object
const filters = { roles: [], languages: [], levels: [] };

//set all jobs on load
app.setJobs(jobListings);

//loop through all instances of .filter-pills
document.querySelectorAll('.filter-pills').forEach(pill => {
  //click event handler
  pill.addEventListener('click', e => {
    console.log('first');
    addToFilter(e.target.textContent, e.target.classList[1]);
    const filteredJobs = jobListings.filter(
      job =>
        filters.roles.includes(job.role) &&
        filters.languages.every(language => job.languages.includes(language))
    );
    app.setFilters(filteredJobs);
  });
});

//helper function
function addToFilter(value, type) {
  const filterKey = `${type}s`;
  if (filters[filterKey].includes(value)) return;
  filters[filterKey].push(value);
  //   console.log(filters);
}
