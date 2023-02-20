export{}
var inputText = ''
const apikey = "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"
chrome.runtime.onMessage.addListener(({type , text}) => {
  if(type === "query"){
    inputText = text
    console.log("got" , {text,type})
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'f266f6b76dmsha6e07fbddd0e845p11c15cjsn68aefa7ed48a',
        'X-RapidAPI-Host': 'botlens-gpt-text-detection.p.rapidapi.com'
      },
      body: '{"text":"Many people have claimed to be Satoshi Nakamoto, but none of them have been able to provide convincing evidence of their identity. Some of the most notable claimants include Australian entrepreneur Craig Wright and American computer scientist Nick Szabo. However, their claims have been met with skepticism and have failed to convince the wider community."}'
    }; 
    
    fetch('https://botlens-gpt-text-detection.p.rapidapi.com/req_check_bot.php', options)
      .then(response => response.json())
      .then(response => console.log("Hello" , response))
      .catch(err => console.error(err));
    
  }
})


