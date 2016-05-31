chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var username = localStorage["username"] || "test-user";
    console.log("chrome.storage.local.get", username);
    details.requestHeaders.push({name: "GAP-Auth", value: username});
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
