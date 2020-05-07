function getExt(sendResponse) {
  var data = $("input[ng-model='data.Ext']").val();
  console.log('getExt', data);
  if (data) {
    var json = JSON.parse(data);
    sendResponse(json);
  }
}
function setExt(arr, sendResponse) {
  var obj = { mutex: [] };
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    arr.forEach(function (item) {
      if (item.value) {
        if (
          item.name === 'isWait' ||
          item.name === 'btnShow' ||
          item.name === 'showAll' ||
          item.name === 'canSort'
        ) {
          obj[item.name] = item.value === 'on' ? true : false;
        } else if (item.name === 'linkId' || item.name === 'layout') {
          obj[item.name] = item.value.split(',');
        } else if (item.name === 'mutex') {
          obj['mutex'].push(item.value);
        } else {
          obj[item.name] = item.value;
        }
      }
    });
  }
  if (obj.mutex.length === 0) {
    delete obj.mutex;
  }
  console.log('setExt', obj);
  sendResponse(obj);
  // $("input[ng-model='data.Ext']")
  //   .val(JSON.stringify(obj))
  //   .trigger('change');
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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
