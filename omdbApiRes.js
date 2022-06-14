lpTag.agentSDK.init({});

const divUserMessage = document.getElementById("userMessage");

const updateCallback = function (data) {
  const path = data.key;
  const value = data.newValue;

  divUserMessage.insertAdjacentHTML("beforeend", value);
};

const notifyWhenDone = function (err) {
  if (err) {
  }
};

const pathToData = "chatTranscript.lines[0]";

lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

// const omdb = document.getElementById("omdb");
// const userMessage = document.getElementById("userMessage");
// const apiKey = `e4ce0003`;

// async function getResponse() {
//   try {
//     const movieTitle = userMessage.value;
//     const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
//     const response = await fetch(url);
//     const responseJson = await response.json();

//     return responseJson;
//   } catch (err) {
//     console.log(err);
//   }
// }

// omdb.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getResponse();
// });
