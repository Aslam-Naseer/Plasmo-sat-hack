export{}
var inputText = ''
chrome.runtime.onMessage.addListener(({type , text}) => {
  if(type === "query"){
    inputText = text
    console.log("got" , {text,type})
  }
})

var OPENAI_API_KEY = "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";
const openaiApiKey = "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";

// Create a function to fetch data from the OpenAI API
// async function fetchOpenAI(data) {
//   const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${openaiApiKey}`,
//     },
//     body: JSON.stringify({
//       prompt: data.prompt,
//       max_tokens: data.maxTokens,
//       temperature: data.temperature,
//       n: data.n,
//       stream: false,
//       stop: data.stop,
//     }),
//   });

//   const json = await response.json();
//   return json.choices[0].text;
// }

// // Use the fetchOpenAI function to generate text from OpenAI
// const generatedText = await fetchOpenAI({
//   prompt: "Hello, my name is",
//   maxTokens: 50,
//   temperature: 0.5,
//   n: 1,
//   stop: "\n",
// });

// console.log(generatedText);
console.log(inputText)
