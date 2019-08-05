function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      if (callback) callback(response);
    });
  });
}
$('form').submit(function(e) {
  console.log($(this).serializeArray());
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
  if (json.isWait) {
    $('#isWait').prop('checked', true);
  }
  if (json.showAll) {
    $('#showAll').val('on');
  } else {
    $('#showAll').val('off');
  }
  // if (json.btnShow) {
  //   $('#btnShow').val('true');
  // } else {
  //   $('#btnShow').val('false');
  // }
  if (json.order) {
    $('#order').val(json.order);
  }
  if (json.linkId) {
    $('#linkId').val(json.linkId.join(','));
  }
  if (json.layout) {
    $('#layout').val(json.layout.join(','));
  }
  if (json.linkUrl) {
    $('#linkUrl').val(json.linkUrl);
  }
  if (json.componentName) {
    $('#componentName').val(json.componentName);
  }
  if (json.position) {
    $('#position').val(json.position);
  }
  if (json.layoutLink) {
    $('#layoutLink').val(json.layoutLink);
  }
  if (json.height) {
    $('#height').val(json.height);
  }
  if (json.type300) {
    $('#type300').val(json.type300);
  }
  if (json.extendType) {
    $('#extendType').val(json.extendType);
  }
  if (json.extendLabel) {
    $('#extendLabel').val(json.extendLabel);
  }
  if (json.extendName) {
    $('#extendName').val(json.extendName);
  }
  if (json.extendSource) {
    $('#extendSource').val(json.extendSource);
  }
  if (json.extendBindValue) {
    $('#extendBindValue').val(json.extendBindValue);
  }
  if (json.extendBindName) {
    $('#extendBindName').val(json.extendBindName);
  }
}
function setResult(json) {
  $('#result').val(JSON.stringify(json));
}
sendMessageToContentScript({ cmd: 'getext' }, bindForm);
new ClipboardJS('.copybtn');
