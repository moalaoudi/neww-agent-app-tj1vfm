function fizzbuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : String(i));
  }
  return out;
}
document.getElementById("run").addEventListener("click", () => {
  document.getElementById("out").textContent = fizzbuzz(20).join(" · ");
});
