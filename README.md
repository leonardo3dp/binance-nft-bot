# Binance NFT Bot (Buyer)

Allows automatically participate in NFT sales. Supports only *ENGLISH* site version.

If you're using another language on binance.com, please switch UI to ***English***.

No external libraries are needed. Runs from browser's console.

## Instructions

Usage is pretty simple.

1. Go to the browser console: 

>**Firefox:**
>> Tools -> Web Developer Tools -> Browser Console.

>**Chrome:**
>> Show -> Developers -> JavaScript Console

And then paste to the console the contents of:

> scripts.js

2. Run bot using the following function:

Paste the function to console window, then press *ENTER* on keyboard.

1)
> runWatchGod()

To run bot without scan timeout. If you're using poor laptop, it most likely
fail all the process.

So I suggest use 2nd option:

2) 
> runWatchDog(4)

Will run a bot with a little delay (4 ms or your custom value). That option
will not crash your browser window.

## Bot Settings
> shouldClickMax - set to true if you want to buy maximum amount of the NFT.

> MAX_BUTTON_TIMEOUT - sets the timeout (in ms) for clicking on MAX button.

> BUY_BUTTON_TIMEOUT - sets timeout (in ms) for clicking on BUY button.

> SUBMIT_BUTTON_TIMEOUT - sets timeout (in ms) for clicking on SUBMIT button.

**Explanation:** timeouts are needed in order to not be triggered as a bot by
Google Captcha or inbuilt Binance security tools.

### Disclaimer

Please, do not use this to break any platform rules.

I'm not responsible for any losses from your side or platform side.

Any usage of this information or code example - it's your own risk.