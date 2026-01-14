/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
  const data = await res.json();

  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";

  // const quote = await fetchQuote();
  // element.innerHTML = "Tenemos Data...";

  const quoteLabel = document.createElement("blockquote");
  const authoLabel = document.createElement("h3");
  const nextQuouteButton = document.createElement("button");
  nextQuouteButton.innerText = "Next Quote";

  //Añadir Listener
  nextQuouteButton.addEventListener("click", async () => {
    element.innerHTML = " Loading...";
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authoLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authoLabel, nextQuouteButton);
  };

  fetchQuote().then(renderQuote);
};
