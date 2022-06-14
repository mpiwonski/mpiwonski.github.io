lpTag.agentSDK.init({});

const divUserMessage = document.getElementById("userMessage");

const updateCallback = function (data) {
  const newLine = data.newValue;
  console.log(newLine);

  if (newLine[0].by === "Visitor") {
    divUserMessage.innerHTML = newLine[0].text;
    console.log(newLine[0].text);
  }
};

const notifyWhenDone = function (err) {
  if (err) {
  }
};

const pathToData = "chatTranscript.lines";

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
