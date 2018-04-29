chrome.webRequest.onBeforeRequest.addListener(
  details => {
    try {
      const url = new URL(details.url);
      const hasChatBubble = url.href.startsWith(
        "https://js.intercomcdn.com/"
      );

      return { cancel: hasChatBubble };
    } catch (err) {
      console.error(err.stack);
      return { cancel: false };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);