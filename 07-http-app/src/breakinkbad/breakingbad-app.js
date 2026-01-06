/**
 * @returns {Object}
 */
const fetchQuote = async () => {
  const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";
};
