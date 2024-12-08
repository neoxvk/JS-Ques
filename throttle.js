function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    }
  };
}

const log = throttle(() => console.log("Throttled!"), 1000);
log(); // Will log "Throttled!" only once per second
