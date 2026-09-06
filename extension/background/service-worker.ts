import type { ExtensionMessage } from "../shared/messages";

chrome.runtime.onMessage.addListener((message: ExtensionMessage, _sender, sendResponse) => {
  if (message.type === "health-check") sendResponse({ ok: true, component: "background" });
});
