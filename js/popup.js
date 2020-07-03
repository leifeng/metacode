function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
$('form').submit(function (e) {
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
  if (json.canSort) {
    $('#canSort').prop('checked', true);
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
  if (json.padding) {
    $('#padding').val(json.padding);
  }
  if (json.type300) {
    $('#type300').val(json.type300);
  }
  if (json.extendType) {
    $('#extendType').val(json.extendType);
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
  if (json.regular) {
    $('#regular').val(json.regular);
  }
  if (json.regularTip) {
    $('#regularTip').val(json.regularTip);
  }
  if (json.hideValue) {
    $('#hideValue').val(json.hideValue);
  }
  if (json.extendSource) {
    $('#extendSource').val(json.extendSource);
  }
  if (json.extendValus) {
    $('#extendValus').val(json.extendValus);
  }
  if (json.mutex) {
    json.mutex.map((item, index) => {
      $('#mutex' + index).val(item);
    });
  }
  if (json.format) {
    $('#format').val(json.format);
  }
}
function setResult(json) {
  $('#result').val(JSON.stringify(json));
}
sendMessageToContentScript({ cmd: 'getext' }, bindForm);
new ClipboardJS('.copybtn');
