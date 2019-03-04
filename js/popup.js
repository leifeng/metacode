function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      if (callback) callback(response);
    });
  });
}
$('form').submit(function(e) {
  sendMessageToContentScript({ cmd: 'setext', value: $(this).serializeArray() }, setResult);
  e.preventDefault();
});
function bindForm(json) {
  if (!json) return;
  console.log('bindForm', json);
  setResult(json);
  if (json.part) {
    $('#part').val(json.part);
  }
  if (json.defaultvalue) {
    $('#defaultvalue').val(json.defaultvalue);
  }
  if (json.sourceType) {
    $('#sourceType').val(json.sourceType);
  }
  if (json.iswait) {
    $('#iswait').prop('checked', true);
  }
  if (json.showall) {
    $('#showall').prop('checked', true);
  }
  if (json.order) {
    $('#order').val(json.order);
  }
}
function setResult(json) {
  $('#result').val(JSON.stringify(json));
}
sendMessageToContentScript({ cmd: 'getext' }, bindForm);
new ClipboardJS('.copybtn');
