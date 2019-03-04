function getExt(sendResponse) {
  var data = $("input[ng-model='data.Ext']").val();
  console.log('getExt', data);
  if (data) {
    var json = JSON.parse(data);
    sendResponse(json);
  }
}
function setExt(arr, sendResponse) {
  var obj = {};
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    arr.forEach(function(item) {
      if (item.value) {
        if (item.name === 'isWait' || item.name === 'showAll') {
          obj[item.name] = item.value === 'on' ? true : false;
        } else {
          obj[item.name] = item.value;
        }
      }
    });
  }

  sendResponse(obj);
  // $("input[ng-model='data.Ext']")
  //   .val(JSON.stringify(obj))
  //   .trigger('change');
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.cmd) {
    case 'setext':
      setExt(request.value, sendResponse);
      break;
    case 'getext':
      getExt(sendResponse);
      break;
    default:
      break;
  }
});
