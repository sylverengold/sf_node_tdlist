
function deleteTache(id) {
 const XHR = new XMLHttpRequest();
  const urlEncodedDataPairs = [];
  urlEncodedDataPairs.push(`${encodeURIComponent("id")}=${encodeURIComponent(id)}`);
  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  XHR.addEventListener('load', (event) => {
  });
  XHR.addEventListener('error', (event) => {
  });
  XHR.open('DELETE', '/');
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedData);
}

function removeTache(id) {
 const XHR = new XMLHttpRequest();
  const urlEncodedDataPairs = [];
  urlEncodedDataPairs.push(`${encodeURIComponent("id")}=${encodeURIComponent(id)}`);
  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  XHR.addEventListener('load', (event) => {
  });
  XHR.addEventListener('error', (event) => {
  });
  XHR.open('POST', '/');
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedData);
}


function addTache() {
  const XHR = new XMLHttpRequest();
  const el = document.querySelector("#new_tache")
  const urlEncodedDataPairs = [];
  urlEncodedDataPairs.push(`${encodeURIComponent("new_tache")}=${encodeURIComponent(el.value)}`);
  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  XHR.addEventListener('load', (event) => {
  });
  XHR.addEventListener('error', (event) => {
  });
  XHR.open('POST', '/');
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedData);
}