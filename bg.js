var KEYS = ["x-dex-name", "x-dex-email", "x-dex-email-verified"];


chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {

    KEYS.forEach(function(x) {
      var lx = localStorage[x] || "";
      details.requestHeaders.push({name: x, value: lx});
    });
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
