chrome.storage.local.get('items', (data) => {
  console.log(data);
});

const items = {};
items.data = [];
const title = document.getElementById('title').innerText;
items.data.push(title);

chrome.storage.local.set({ items }, (e) => {
  console.log('set');
});