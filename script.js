"use script";

// Getting the title of webpage
const title = document.getElementById("webpageTitle").text;

lpTag.sdes = lpTag.sdes || [];
console.log(lpTag);
lpTag.sdes.push({
  type: "ctmrinfo",
  info: {
    accountName: title,
  },
});

console.log(title);
