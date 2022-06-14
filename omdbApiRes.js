lpTag.agentSDK.init({});

const inputUserMessage = document.getElementById("userMessage");
const apiResponse = document.getElementById("apiResponse");

const updateCallback = function (data) {
  const newLine = data.newValue;
  console.log(newLine);

  if (newLine[0].by === "Visitor") {
    inputUserMessage.innerHTML = newLine[0].text;
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
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    apiResponse.innerHTML = responseJson;
  } catch (err) {
    console.log(err);
  }
};

omdb.addEventListener("submit", (e) => {
  e.preventDefault();
  getResponse();
});
