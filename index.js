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