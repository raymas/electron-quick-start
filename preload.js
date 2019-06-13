// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
//Inline require to nodeJS API (see @{./main.js})
const spawn = require("child_process");


window.addEventListener('DOMContentLoaded', () => {
  for (const versionType of ['chrome', 'electron', 'node']) {
    document.getElementById(`${versionType}-version`).innerText = process.versions[versionType]
  }

  //get the primary button on the index.html
  document.getElementById('bt-animate-decay').addEventListener('click', () => {
    spawn.exec('python ./python-scripts/animate_decay.py');
  });
})
