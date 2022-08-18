const extN = document.querySelector('#extN');
const intN = document.querySelector('#intN');

function saveExt(e) {
  browser.storage.local.set({
      extNot: extN.checked
  });
}

function saveInt(e) {
  browser.storage.local.set({
      intNot: intN.checked
  });
}

function restoreOptions() {

  function setCurrent(result) {
    extN.checked = result.extNot;
    intN.checked = result.intNot;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get({
    extNot: true,
    intNot: false
  });
  getting.then(setCurrent, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
extN.addEventListener('change', saveExt);
intN.addEventListener('change', saveInt);
