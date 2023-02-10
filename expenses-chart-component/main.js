const totalDiv = document.getElementById('total-amount');
const barGraphArea = document.getElementById('bar-chart');

const expenses = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const getData = async () => {
  //get totals
  const totalAmount = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  //get highest value
  const highestValue = Math.max(...expenses.map(dt => dt.amount));

  totalDiv.textContent = `$${totalAmount}`;
  expenses.forEach(dt => {
    const heightPercent = `${Math.round((+dt.amount / +highestValue) * 100)}%`;
    // console.log(heightPercent);
    let html = `
        <div class="flex flex-col gap-[1px] justify-end">
            <div class="bar ${
              dt.amount === highestValue ? 'bg-accent hover:bg-accent-300' : ''
            }" style="height:${heightPercent}" tip="$${dt.amount}"></div>
            <span class="text-xs text-medium-brown text-center">${dt.day}</span>
        </div>
    `;
    barGraphArea.insertAdjacentHTML('beforeend', html);
  });
  //   console.log(totalDiv);
  Array.from(document.querySelectorAll('[tip]')).forEach(el => {
    let tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.innerText = el.getAttribute('tip');
    tip.style.transform =
      'translate(' +
      (el.hasAttribute('tip-left') ? 'calc(-100% - 5px)' : '15px') +
      ', ' +
      (el.hasAttribute('tip-top') ? '-100%' : '0') +
      ')';
    el.appendChild(tip);
    el.onmousemove = e => {
      tip.style.left = e.clientX + 'px';
      tip.style.top = e.clientY + 'px';
    };
  });
};

getData();
