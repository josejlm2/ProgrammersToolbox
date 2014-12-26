if ( !localStorage["savedUrls"] ) {
  localStorage["savedUrls"] = JSON.stringify([]);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method === "sendURL") {
      var arrayOfUrls = JSON.parse(localStorage["savedUrls"]);
      arrayOfUrls.unshift([request.sentUrl, request.title]);
      localStorage["savedUrls"] = JSON.stringify(arrayOfUrls);
      sendResponse({status: 200});
    }
  });
  