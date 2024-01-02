let count = 0;

function increment() {
  count++;
  increment();
}

try {
  increment();
} catch (err) {
  console.log(err, count);
}
