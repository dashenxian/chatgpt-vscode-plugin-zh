# 这是ChatGPT VSCode Extension扩展微调

把其中几个快捷提问改为中文，这样返回结果就是中文的，便于我这种英文渣渣可以读懂

# ChatGPT VSCode Extension

This is a Visual Studio Code extension for ChatGPT that was built using only ChatGPT and 5 beers.
The `README.md` file for this extension was generated by ChatGPT.

## Install the plugin from the [VSCode MarketPlace](https://marketplace.visualstudio.com/items?itemName=xiaoshenxian.chatgpt-vscode-plugin-zh)

## Features
#### Commands:
- `ChatGPT: Query` (will provide a prompt for you to ask a question)
- `ChatGPT: 请为这段代码添加测试代码` (generates tests based on file/text selection)
- `ChatGPT: 为什么这段代码会报错?` (analyses your code to highlight any logic/syntax errors)
- `ChatGPT: 请解释这段代码`
- `ChatGPT: 可以重构一下这段代码并说一下重构后和以前的代码有什么区别`
- `ChatGPT: Reset token` (clears access token if expired or having issues)

*Everything except Reset Token and Query are available from the context menu when right-clicking in the editor.*


![image](https://user-images.githubusercontent.com/38425102/206071229-f017247e-831b-4e42-8c1a-914851da392f.png)

## Usage

To use the extension:
**This package requires a valid session token from ChatGPT to access it's unofficial REST API.**
Open the VS Code Command Palette and Type `ChatGPT: Login`, this will prompt you for your session token.

To get a session token:

1. Go to https://chat.openai.com/chat and log in or sign up.
2. Open dev tools.
3. Open `Application` > `Cookies` (`Storage` > `Cookies` on FireFox)
   
 ![image](https://user-images.githubusercontent.com/38425102/205900045-185c2c41-b4ff-408c-9da6-bbb606ac39c6.png)
   
4. Copy the value for `__Secure-next-auth.session-token` and enter it into the prompt from `ChatGPT: Login`

*Once you're logged in, you can ask ChatGPT any question and supply source code from your current file/selection.*

## Support
If you need help using this extension, please open an issue on the GitHub repository for this extension.

## Credits
- [ChatGPT](https://chat.openai.com/chat) - The large language model trained by OpenAI that was used to generate this README file
- [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api/) - The NPM package used to query ChatGPT
- [mpociot's extension](https://github.com/mpociot/chatgpt-vscode) - Inspiration for the project and the original webview panel
- [Gencay's extension](https://github.com/gencay/vscode-chatgpt) - Ported version of Gencay's webview panel.
- [Yeoman](https://yeoman.io/) - The code generator used to scaffold the extension project
- [VS Code Extension Generator](https://github.com/Microsoft/vscode-generator-code) - The Yeoman generator for creating VS Code extensions
