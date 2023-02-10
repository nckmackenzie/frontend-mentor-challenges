const totalDiv = document.getElementById('total-amount');
const barGraphArea = document.getElementById('bar-chart');
const getData = async () => {
  //fetch data from json file
  const response = await fetch('data.json');
  const data = await response.json();
  //get totals
  const totalAmount = data.reduce((acc, cur) => acc + cur.amount, 0);
  //get highest value
  const highestValue = Math.max(...data.map(dt => dt.amount));

  totalDiv.textContent = `$${totalAmount}`;
  data.forEach(dt => {
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
