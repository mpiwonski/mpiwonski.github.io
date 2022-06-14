lpTag.agentSDK.init({});

const inputUserMessage = document.getElementById("userMessage");
const movieTitleDiv = document.getElementById("movieTitle");
const movieYearDiv = document.getElementById("movieYear");

const updateCallback = function (data) {
  const newLine = data.newValue;
  console.log(newLine);

  if (newLine[0].by === "Visitor") {
    inputUserMessage.value = newLine[0].text;
    console.log(newLine[0].text);
  }
};

const notifyWhenDone = function (err) {
  if (err) {
  }
};

const pathToData = "chatTranscript.lines";

lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

const apiKey = `e4ce0003`;

const getResponse = async function () {
  try {
    const movieTitle = userMessage.value;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    movieTitleDiv.innerHTML = `Movie title: ${responseJson.Title}`;
    movieYearDiv.innerHTML = `Movie year: ${responseJson.Year}`;
  } catch (err) {
    console.log(err);
  }
};

omdb.addEventListener("submit", (e) => {
  e.preventDefault();
  getResponse();
});
