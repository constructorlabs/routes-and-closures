// storage.js
function storage() {
  let cnt = 0;

  function increment() {
    return ++cnt;
  }

  return increment;
}

module.exports = storage;
