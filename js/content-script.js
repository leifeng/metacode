function getExt(sendResponse) {
  var data = $("input[ng-model='data.Ext']").val();
  if (data) {
    var json = JSON.parse(data);
    sendResponse(json);
  }
}
function setExt(arr) {
  var obj = {};
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    arr.forEach(function(item) {
      obj[item.name] = item.value;
    });
  }
  $("input[ng-model='data.Ext']").val(JSON.stringify(obj));
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.cmd) {
    case 'setext':
      setExt(request.value);
      break;
    case 'getext':
      getExt(sendResponse);
      break;
    default:
      break;
  }
});
