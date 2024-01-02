let count = 0;

const increment = () => {
  count++;
  increment();
};

try {
  increment();
} catch (err) {
  console.log(err, count);
}

const flatten = (arr, flatArr = []) => {
  if (arr.length === 0) return flatArr;
  return () => {
    const [item, ...rest] = arr;

    if (Array.isArray(item)) {
      return flatten(item.concat(...rest), flatArr);
    } else {
      flatArr.push(item);
      return flatten(rest, flatArr);
    }
  };
};

const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

console.log(trampoline(flatten([5, [3, 4], [4, [4, [4]]]])));

const p = document.querySelector("p");

const isPrime = (n) => {
  if (n < 2) return false;
  for (let div = 2; div <= Math.sqrt(n); div++) {
    if (n % div === 0) return false;
  }
  return true;
};

const primeList = (n, current = 2, primes = []) => {
  while (current <= n) {
    if (isPrime(current)) {
      primes.push(current);
    }
    current++;
  }
  return primes.join(", ");
};

p.textContent = primeList(10000);
setTimeout(() => window.alert("Prime calculations complete"), 100);