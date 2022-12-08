import * as vscode from 'vscode';
import ChatGptViewProvider from './chatgpt-view-provider';

export async function activate(context: vscode.ExtensionContext) {
	const chatViewProvider = new ChatGptViewProvider(context);

	context.subscriptions.push(
		vscode.commands.registerCommand('chatgpt-vscode-plugin.askGPT', askChatGPT),
		vscode.commands.registerCommand('chatgpt-vscode-plugin.whyBroken', askGPTWhyBroken),
		vscode.commands.registerCommand('chatgpt-vscode-plugin.explainPls', askGPTToExplain),
		vscode.commands.registerCommand('chatgpt-vscode-plugin.refactor', askGPTToRefactor),
		vscode.commands.registerCommand('chatgpt-vscode-plugin.addTests', askGPTToAddTests),
		vscode.commands.registerCommand('chatgpt-vscode-plugin.resetToken', resetToken),
		vscode.window.registerWebviewViewProvider("chatgpt-vscode-plugin.view", chatViewProvider, {
			webviewOptions: { retainContextWhenHidden: true }
		})
	);

	async function askGPTToExplain() { await askChatGPT('请解释这段代码?'); }
	async function askGPTWhyBroken() { await askChatGPT('为什么这段代码会报错?'); }
	async function askGPTToRefactor() { await askChatGPT('可以重构一下这段代码并说一下重构后和以前的代码有什么区别?'); }
	async function askGPTToAddTests() { await askChatGPT('请为这段代码添加测试代码?'); }

	async function resetToken() {
		await context.globalState.update('chatgpt-session-token', null);
		await chatViewProvider.setUpSessionToken();
		// await vscode.window.showInformationMessage("Token reset, you'll be prompted for it next to you next ask ChatGPT a question.");
	}

	async function askChatGPT(userInput?: string) {
		if (!userInput) {
			userInput = await vscode.window.showInputBox({ prompt: "Ask ChatGPT a question" }) || "";
		}

		let editor = vscode.window.activeTextEditor;

		if (editor) {
			const selectedCode = editor.document.getText(vscode.window.activeTextEditor?.selection);
			const entireFileContents = editor.document.getText();

			const code = selectedCode
				? selectedCode
				: `This is the ${editor.document.languageId} file I'm working on: \n\n${entireFileContents}`;

			chatViewProvider.sendApiRequest(userInput, code);
		}
	}
}