const select = document.getElementById('country-select');
const selectedOption = select.querySelector('#selected-option');
const options = select.querySelector('.options');

const selectClickHandler = (e) => {
  select.classList.add('open');
  console.log({ e });
  e.stopPropagation();
  select.removeEventListener('click', selectClickHandler);

  document.body.addEventListener(
    'click',
    () => {
      select.classList.remove('open');
      select.addEventListener('click', selectClickHandler);
    },
    { once: true }
  );
};

select.addEventListener('click', selectClickHandler);

options.addEventListener('click', (e) => {
  const targetOption = e.target.classList.contains('option')
    ? e.target
    : e.target.closest('.option');
  select.dataset.selected = targetOption.dataset.value;
  selectedOption.innerHTML = targetOption.innerHTML;
});


