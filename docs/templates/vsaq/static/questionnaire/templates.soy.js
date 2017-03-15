// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vsaq.questionnaire.templates.
 */

goog.provide('vsaq.questionnaire.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.sectionsHeader = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="_vsaq_sections_header">Sections</div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.sectionsHeader.soyTemplateName = 'vsaq.questionnaire.templates.sectionsHeader';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.questionnaireSection = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li><a title="Open section #' + soy.$$escapeHtmlAttribute(opt_data.sectionHtml) + '"><div class="vsaq-section-title">' + soy.$$escapeHtml(opt_data.sectionHtml) + '</div></a><div class="vsaq-section-status"><span class="vsaq-unanswered-count">x</span> questions unanswered</div></li>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.questionnaireSection.soyTemplateName = 'vsaq.questionnaire.templates.questionnaireSection';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.block = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<fieldset id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-block"><legend><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span>' + ((opt_data.blockId) ? '<a href="#' + soy.$$escapeHtmlAttribute(opt_data.blockId) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.blockId) + '" class="vsaq-block-link">&#x1f517;</a>' : '') + '</legend></fieldset>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.block.soyTemplateName = 'vsaq.questionnaire.templates.block';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.editablePropertyValue = function(opt_data, opt_ignored) {
  var output = '<span name="' + soy.$$escapeHtmlAttribute(opt_data.propertyInformation.nameInClass) + '" class="' + ((! opt_data.propertyInformation.unchangeable) ? (opt_data.propertyInformation.defaultValues) ? 'vsaq-select-text' : 'vsaq-label-text' : '') + '">';
  if (opt_data.propertyInformation.defaultValues) {
    output += '<select>' + ((! opt_data.propertyInformation.mandatory) ? '<option value="">none</option>' : '');
    var defaultTypeKeyList42 = soy.$$getMapKeys(opt_data.propertyInformation.defaultValues);
    var defaultTypeKeyListLen42 = defaultTypeKeyList42.length;
    for (var defaultTypeKeyIndex42 = 0; defaultTypeKeyIndex42 < defaultTypeKeyListLen42; defaultTypeKeyIndex42++) {
      var defaultTypeKeyData42 = defaultTypeKeyList42[defaultTypeKeyIndex42];
      output += '<option value="' + soy.$$escapeHtmlAttribute(opt_data.propertyInformation.defaultValues[defaultTypeKeyData42]) + '"' + ((opt_data.propertyInformation.defaultValues[defaultTypeKeyData42] == opt_data.propertyInformation.value) ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml(opt_data.propertyInformation.defaultValues[defaultTypeKeyData42]) + '</option>';
    }
    output += '</select>';
  } else {
    output += soy.$$escapeHtml(opt_data.propertyInformation.value || 'none');
  }
  output += '</span>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editablePropertyValue.soyTemplateName = 'vsaq.questionnaire.templates.editablePropertyValue';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.editablePrefix = function(opt_data, opt_ignored) {
  var output = '<div><table width="100%">';
  var knownPropertyIndexList59 = soy.$$getMapKeys(opt_data.knownPropertiesKeys);
  var knownPropertyIndexListLen59 = knownPropertyIndexList59.length;
  for (var knownPropertyIndexIndex59 = 0; knownPropertyIndexIndex59 < knownPropertyIndexListLen59; knownPropertyIndexIndex59++) {
    var knownPropertyIndexData59 = knownPropertyIndexList59[knownPropertyIndexIndex59];
    output += '<tr><td>' + soy.$$escapeHtml(opt_data.knownPropertiesKeys[knownPropertyIndexData59]) + '</td><td>' + ((! opt_data.knownPropertiesValues[knownPropertyIndexData59].metadata && ! opt_data.knownPropertiesValues[knownPropertyIndexData59].defaultValues && opt_data.knownPropertiesValues[knownPropertyIndexData59].value) ? '<span name="' + soy.$$escapeHtmlAttribute(opt_data.knownPropertiesValues[knownPropertyIndexData59].nameInClass) + '" class="vsaq-remove-text"><input type="checkbox" checked="checked" class="vsaq-checkbox"></span>' : vsaq.questionnaire.templates.editablePropertyValue({propertyInformation: opt_data.knownPropertiesValues[knownPropertyIndexData59]})) + '</td></tr>';
  }
  output += '</table></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editablePrefix.soyTemplateName = 'vsaq.questionnaire.templates.editablePrefix';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.editableSuffix = function(opt_data, opt_ignored) {
  var output = '<div><a class="maia-button eh-add-to-item">Add</a>&nbsp;<select>';
  var typeList76 = opt_data.types;
  var typeListLen76 = typeList76.length;
  for (var typeIndex76 = 0; typeIndex76 < typeListLen76; typeIndex76++) {
    var typeData76 = typeList76[typeIndex76];
    output += '<option value="' + soy.$$escapeHtmlAttribute(typeData76) + '" ' + ((typeData76 == opt_data.defaultType) ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml(typeData76) + '</option>';
  }
  output += '</select>&nbsp;' + ((opt_data.defaultType != 'block' && opt_data.defaultType != 'radiogroup' && opt_data.defaultType != 'checkgroup') ? '<a class="maia-button eh-copy-item">Copy</a>&nbsp;' : '') + '<a class="maia-button eh-remove-from-item">Remove</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="maia-button eh-move-item-up">&#x25B2;</a><a class="maia-button eh-move-item-down">&#x25BC;</a></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editableSuffix.soyTemplateName = 'vsaq.questionnaire.templates.editableSuffix';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.editableTrigger = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-editable" style="display:inline">&nbsp;<img class="vsaq-icon eh-make-editable" src="/static/mode_edit.png" title="edit/save" alt="edit/save"/>[' + soy.$$escapeHtml(opt_data.itemType) + ']</div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editableTrigger.soyTemplateName = 'vsaq.questionnaire.templates.editableTrigger';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.radio = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-radio-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" type="radio" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-radiobutton"> <span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.radio.soyTemplateName = 'vsaq.questionnaire.templates.radio';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.yesno = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-yesno-block" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="vsaq-question-title"><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '/yes" type="radio" value="yes" class="vsaq-radiobutton"> <span name="yes" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.yesHtml) + '</span></label><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '/no" type="radio" value="no" class="vsaq-radiobutton"> <span name="no" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.noHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.yesno.soyTemplateName = 'vsaq.questionnaire.templates.yesno';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.groupitem = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-group-item"><div class="vsaq-question-title"><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.groupitem.soyTemplateName = 'vsaq.questionnaire.templates.groupitem';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.info = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-info-item"><span name="info" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.info.soyTemplateName = 'vsaq.questionnaire.templates.info';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.group = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-group-item"></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.group.soyTemplateName = 'vsaq.questionnaire.templates.group';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.spacer = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item"><hr class="vsaq-spacer" /></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.spacer.soyTemplateName = 'vsaq.questionnaire.templates.spacer';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.check = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-checkbox-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><label><input type="checkbox" name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-checkbox"> <span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.check.soyTemplateName = 'vsaq.questionnaire.templates.check';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.bubble = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-bubble-block" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="maia-notification ' + ((opt_data.isWarning) ? 'vsaq-bubble-' + soy.$$escapeHtmlAttribute(opt_data.severity || 'medium') : '') + '"><p><strong>' + ((opt_data.customTitle) ? '<span name="customTitle" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.customTitle) + '</span>' : (opt_data.isWarning) ? 'Warning' + ((opt_data.severity) ? ' &mdash; possible ' + soy.$$escapeHtml(opt_data.severity) + '-risk issue' : '') : 'Tip') + '</strong></p><p><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.contentHtml) + '</span></p>' + ((opt_data.whyHtml) ? '<div class="vsaq-compensating-desc"><i><span name="clarification" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.whyHtml) + '</span></i><br><textarea id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-box">' + ((opt_data.whyValue) ? soy.$$escapeHtmlRcdata(opt_data.whyValue) : '') + '</textarea></div>' : '') + '</div></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.bubble.soyTemplateName = 'vsaq.questionnaire.templates.bubble';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.box = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="vsaq-question-title"><label name="text" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><textarea id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((opt_data.placeholder) ? 'placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '" ' : '') + ((opt_data.inputPattern) ? 'pattern="' + soy.$$escapeHtmlAttribute(opt_data.inputPattern) + '" ' : '') + ((opt_data.inputTitle) ? 'title="' + soy.$$escapeHtmlAttribute(opt_data.inputTitle) + '" ' : '') + ((opt_data.isRequired) ? 'required ' : '') + 'class="vsaq-box"></textarea></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.box.soyTemplateName = 'vsaq.questionnaire.templates.box';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.line = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="vsaq-question-title"><label name="text" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><input id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((opt_data.placeholder) ? 'placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '" ' : '') + ((opt_data.isRequired) ? 'required ' : '') + ((opt_data.inputPattern) ? 'pattern="' + soy.$$escapeHtmlAttribute(opt_data.inputPattern) + '" ' : '') + ((opt_data.inputTitle) ? 'title="' + soy.$$escapeHtmlAttribute(opt_data.inputTitle) + '" ' : '') + ((opt_data.type) ? 'type="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" ' : '') + 'class="vsaq-line"><p></p></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.line.soyTemplateName = 'vsaq.questionnaire.templates.line';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.upload = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="vsaq-question-title"><label name="text" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-file">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><div class="vsaq-question-title">The following file types are allowed: PDF, ODT, DOC, DOCX</div><form enctype="multipart/form-data" method="POST" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-form"><span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-label"></span> <input type="file" name="file" class="vsaq-upload" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-file"> <a href="javascript:void(0)" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-download">Download</a> <a href="javascript:void(0)" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-delete">Delete</a></form><p></p></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.upload.soyTemplateName = 'vsaq.questionnaire.templates.upload';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
vsaq.questionnaire.templates.todoList = function(opt_data, opt_ignored) {
  var output = '<fieldset class="vsaq-item vsaq-block"><legend>Todo List</legend>';
  if (opt_data.todoListItems.length) {
    output += '<p>Based on your selections, we have compiled the following todo list for you:</p><ul id=\'vsaq_todo_ul\'>';
    var todoList278 = opt_data.todoListItems;
    var todoListLen278 = todoList278.length;
    for (var todoIndex278 = 0; todoIndex278 < todoListLen278; todoIndex278++) {
      var todoData278 = todoList278[todoIndex278];
      output += '<li><label><input type=\'checkbox\' name=\'' + soy.$$escapeHtmlAttribute(todoData278.key) + '\' class=\'eh-todo-item\'' + ((opt_data.todoStatus[todoData278.key] == 'checked') ? 'checked ' : '') + 'id=\'' + soy.$$escapeHtmlAttribute(todoData278.key) + '\' value=\'checked\'><span>' + soy.$$escapeHtml(todoData278.description) + '</span></label></li>';
    }
    output += '</ul>';
  } else {
    output += '<p>Great news, you\'re all set. There is no todo.</p>';
  }
  output += '</fieldset>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.todoList.soyTemplateName = 'vsaq.questionnaire.templates.todoList';
}
