// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vsaq.questionnaire.templates.
 * @public
 */

goog.provide('vsaq.questionnaire.templates');

goog.require('soy');
goog.require('soydata.VERY_UNSAFE');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.sectionsHeader = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="_vsaq_sections_header"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.sectionsHeader vsaq/static/questionnaire/templates.soy:26"' : '') + '>Sections</div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.sectionsHeader.soyTemplateName = 'vsaq.questionnaire.templates.sectionsHeader';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.questionnaireSection = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.questionnaireSection vsaq/static/questionnaire/templates.soy:35"' : '') + '><a title="Open section #' + soy.$$escapeHtmlAttribute(opt_data.sectionHtml) + '"><div class="vsaq-section-title">' + soy.$$escapeHtml(opt_data.sectionHtml) + '</div></a><div class="vsaq-section-status"><span class="vsaq-unanswered-count">x</span> questions unanswered</div></li>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.questionnaireSection.soyTemplateName = 'vsaq.questionnaire.templates.questionnaireSection';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.block = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<fieldset id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-block"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.block vsaq/static/questionnaire/templates.soy:53"' : '') + '><legend><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span>' + (opt_data.blockId ? '<a href="#' + soy.$$escapeHtmlAttribute(opt_data.blockId) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.blockId) + '" class="vsaq-block-link">&#x1f517;</a>' : '') + '</legend></fieldset>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.block.soyTemplateName = 'vsaq.questionnaire.templates.block';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.editablePropertyValue = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '<span name="' + soy.$$escapeHtmlAttribute(opt_data.propertyInformation.nameInClass) + '" class="' + (!opt_data.propertyInformation.unchangeable ? opt_data.propertyInformation.defaultValues ? 'vsaq-select-text' : 'vsaq-label-text' : '') + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.editablePropertyValue vsaq/static/questionnaire/templates.soy:71"' : '') + '>';
  if (opt_data.propertyInformation.defaultValues) {
    output += '<select>' + (!opt_data.propertyInformation.mandatory ? '<option value="">none</option>' : '');
    var defaultTypeKey49List = (soy.$$getMapKeys(opt_data.propertyInformation.defaultValues));
    var defaultTypeKey49ListLen = defaultTypeKey49List.length;
    for (var defaultTypeKey49Index = 0; defaultTypeKey49Index < defaultTypeKey49ListLen; defaultTypeKey49Index++) {
      var defaultTypeKey49Data = defaultTypeKey49List[defaultTypeKey49Index];
      output += '<option value="' + soy.$$escapeHtmlAttribute(opt_data.propertyInformation.defaultValues[defaultTypeKey49Data]) + '"' + (opt_data.propertyInformation.defaultValues[defaultTypeKey49Data] == opt_data.propertyInformation.value ? ' selected="selected"' : '') + '>' + soy.$$escapeHtml(opt_data.propertyInformation.defaultValues[defaultTypeKey49Data]) + '</option>';
    }
    output += '</select>';
  } else {
    output += soy.$$escapeHtml((opt_data.propertyInformation.value != null) && (('' + opt_data.propertyInformation.value).length) > 0 ? opt_data.propertyInformation.value : 'none');
  }
  output += '</span>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editablePropertyValue.soyTemplateName = 'vsaq.questionnaire.templates.editablePropertyValue';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.editablePrefix = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '<div' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.editablePrefix vsaq/static/questionnaire/templates.soy:105"' : '') + '><table width="100%">';
  var knownPropertyIndex69List = (soy.$$getMapKeys(opt_data.knownPropertiesKeys));
  var knownPropertyIndex69ListLen = knownPropertyIndex69List.length;
  for (var knownPropertyIndex69Index = 0; knownPropertyIndex69Index < knownPropertyIndex69ListLen; knownPropertyIndex69Index++) {
    var knownPropertyIndex69Data = knownPropertyIndex69List[knownPropertyIndex69Index];
    output += '<tr><td>' + soy.$$escapeHtml(opt_data.knownPropertiesKeys[knownPropertyIndex69Data]) + '</td><td>' + (!opt_data.knownPropertiesValues[knownPropertyIndex69Data].metadata && !opt_data.knownPropertiesValues[knownPropertyIndex69Data].defaultValues && opt_data.knownPropertiesValues[knownPropertyIndex69Data].value ? '<span name="' + soy.$$escapeHtmlAttribute(opt_data.knownPropertiesValues[knownPropertyIndex69Data].nameInClass) + '" class="vsaq-remove-text"><input type="checkbox" checked="checked" class="vsaq-checkbox"></span>' : vsaq.questionnaire.templates.editablePropertyValue({propertyInformation: opt_data.knownPropertiesValues[knownPropertyIndex69Data]}, opt_ijData)) + '</td></tr>';
  }
  output += '</table></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editablePrefix.soyTemplateName = 'vsaq.questionnaire.templates.editablePrefix';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.editableSuffix = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '<div' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.editableSuffix vsaq/static/questionnaire/templates.soy:139"' : '') + '><a class="maia-button eh-add-to-item">Add</a>&nbsp;<select>';
  var type89List = opt_data.types;
  var type89ListLen = type89List.length;
  for (var type89Index = 0; type89Index < type89ListLen; type89Index++) {
    var type89Data = type89List[type89Index];
    output += '<option value="' + soy.$$escapeHtmlAttribute(type89Data) + '"' + (type89Data == opt_data.defaultType ? ' selected="selected"' : '') + '>' + soy.$$escapeHtml(type89Data) + '</option>';
  }
  output += '</select>&nbsp;' + (opt_data.defaultType != 'block' && opt_data.defaultType != 'radiogroup' && opt_data.defaultType != 'checkgroup' ? '<a class="maia-button eh-copy-item">Copy</a>&nbsp;' : '') + '<a class="maia-button eh-remove-from-item">Remove</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="maia-button eh-move-item-up">&#x25B2;</a><a class="maia-button eh-move-item-down">&#x25BC;</a></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editableSuffix.soyTemplateName = 'vsaq.questionnaire.templates.editableSuffix';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.editableTrigger = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-editable" style="display:inline"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.editableTrigger vsaq/static/questionnaire/templates.soy:165"' : '') + '>&nbsp;<img class="vsaq-icon eh-make-editable" src="/static/mode_edit.png" title="edit/save" alt="edit/save"/>[' + soy.$$escapeHtml(opt_data.itemType) + ']</div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.editableTrigger.soyTemplateName = 'vsaq.questionnaire.templates.editableTrigger';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.radio = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-radio-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.radio vsaq/static/questionnaire/templates.soy:179"' : '') + '><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" type="radio" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-radiobutton"> <span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.radio.soyTemplateName = 'vsaq.questionnaire.templates.radio';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.yesno = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-yesno-block" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.yesno vsaq/static/questionnaire/templates.soy:196"' : '') + '><div class="vsaq-question-title"><span name="text" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-title" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '/yes" type="radio" value="yes" class="vsaq-radiobutton"> <span name="yes" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.yesHtml) + '</span></label><label><input name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '/no" type="radio" value="no" class="vsaq-radiobutton"> <span name="no" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.noHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.yesno.soyTemplateName = 'vsaq.questionnaire.templates.yesno';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.groupitem = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-group-item"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.groupitem vsaq/static/questionnaire/templates.soy:222"' : '') + '><div class="vsaq-question-title"><span name="text" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-title" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.groupitem.soyTemplateName = 'vsaq.questionnaire.templates.groupitem';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.info = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-info-item"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.info vsaq/static/questionnaire/templates.soy:237"' : '') + '><span name="info" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.info.soyTemplateName = 'vsaq.questionnaire.templates.info';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.group = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item vsaq-group-item"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.group vsaq/static/questionnaire/templates.soy:248"' : '') + '></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.group.soyTemplateName = 'vsaq.questionnaire.templates.group';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.spacer = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-item"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.spacer vsaq/static/questionnaire/templates.soy:258"' : '') + '><hr class="vsaq-spacer"/></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.spacer.soyTemplateName = 'vsaq.questionnaire.templates.spacer';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.check = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-checkbox-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.check vsaq/static/questionnaire/templates.soy:270"' : '') + '><label><input type="checkbox" name="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-checkbox"> <span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.captionHtml) + '</span></label></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.check.soyTemplateName = 'vsaq.questionnaire.templates.check';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.bubble = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $tmp;
  if (opt_data.customTitle) {
    $tmp = '<span name="customTitle" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.customTitle) + '</span>';
  } else if (opt_data.isWarning) {
    $tmp = 'Warning' + (opt_data.severity ? ' &mdash; possible ' + soy.$$escapeHtml(opt_data.severity) + '-risk issue' : '');
  } else {
    $tmp = 'Tip';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item vsaq-bubble-block" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.bubble vsaq/static/questionnaire/templates.soy:291"' : '') + '><div class="maia-notification ' + (opt_data.isWarning ? 'vsaq-bubble-' + soy.$$escapeHtmlAttribute((opt_data.severity != null) && (('' + opt_data.severity).length) > 0 ? opt_data.severity : 'medium') : '') + '"><p><strong>' + $tmp + '</strong></p><p><span name="text" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.contentHtml) + '</span></p>' + (opt_data.whyHtml ? '<div class="vsaq-compensating-desc"><i><span name="clarification" class="vsaq-label-text">' + soy.$$escapeHtml(opt_data.whyHtml) + '</span></i><br><textarea id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="vsaq-box">' + (opt_data.whyValue ? soy.$$escapeHtmlRcdata(opt_data.whyValue) : '') + '</textarea></div>' : '') + '</div></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.bubble.soyTemplateName = 'vsaq.questionnaire.templates.bubble';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.box = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.box vsaq/static/questionnaire/templates.soy:330"' : '') + '><div class="vsaq-question-title"><label name="text" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-title" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><textarea id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + (opt_data.placeholder ? ' placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '"' : '') + (opt_data.inputPattern ? ' pattern="' + soy.$$escapeHtmlAttribute(opt_data.inputPattern) + '"' : '') + (opt_data.inputTitle ? ' title="' + soy.$$escapeHtmlAttribute(opt_data.inputTitle) + '"' : '') + (opt_data.isRequired ? ' required' : '') + (opt_data.maxlength ? ' maxlength="' + soy.$$escapeHtmlAttribute(opt_data.maxlength) + '"' : '') + ' class="vsaq-box"></textarea></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.box.soyTemplateName = 'vsaq.questionnaire.templates.box';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.line = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.line vsaq/static/questionnaire/templates.soy:359"' : '') + '><div class="vsaq-question-title"><label name="text" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-title" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><input id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + (opt_data.placeholder ? ' placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '"' : '') + (opt_data.isRequired ? ' required' : '') + (opt_data.inputPattern ? ' pattern="' + soy.$$escapeHtmlAttribute(opt_data.inputPattern) + '"' : '') + (opt_data.inputTitle ? ' title="' + soy.$$escapeHtmlAttribute(opt_data.inputTitle) + '"' : '') + (opt_data.maxlength ? ' maxlength="' + soy.$$escapeHtmlAttribute(opt_data.maxlength) + '"' : '') + (opt_data.type ? ' type="' + soy.$$escapeHtmlAttribute(opt_data.type) + '"' : '') + ' class="vsaq-line"><p></p></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.line.soyTemplateName = 'vsaq.questionnaire.templates.line';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.upload = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="vsaq-item" data-vsaq-container-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.upload vsaq/static/questionnaire/templates.soy:384"' : '') + '><div class="vsaq-question-title"><label name="text" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-title" class="vsaq-label-text" for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-file">' + soy.$$escapeHtml(opt_data.captionHtml) + '</label></div><div class="vsaq-question-title">The following file types are allowed: PDF, ODT, DOC, DOCX</div><form enctype="multipart/form-data" method="POST" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-form"><span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-label"></span> <input type="file" name="file" class="vsaq-upload" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-file"> <a href="javascript:void(0)" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-download">Download</a> <a href="javascript:void(0)" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-delete">Delete</a></form><p></p></div>');
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.upload.soyTemplateName = 'vsaq.questionnaire.templates.upload';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes}
 */
vsaq.questionnaire.templates.todoList = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '<fieldset class="vsaq-item vsaq-block"' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="vsaq.questionnaire.templates.todoList vsaq/static/questionnaire/templates.soy:408"' : '') + '><legend>Todo List</legend>';
  if ((opt_data.todoListItems.length)) {
    output += '<p>Based on your selections, we have compiled the following todo list for you:</p><ul id=\'vsaq_todo_ul\'>';
    var todo334List = opt_data.todoListItems;
    var todo334ListLen = todo334List.length;
    for (var todo334Index = 0; todo334Index < todo334ListLen; todo334Index++) {
      var todo334Data = todo334List[todo334Index];
      output += '<li><label><input type=\'checkbox\' name=\'' + soy.$$escapeHtmlAttribute(todo334Data.key) + '\' class=\'eh-todo-item\'' + (opt_data.todoStatus[todo334Data.key] == 'checked' ? ' checked' : '') + ' id=\'' + soy.$$escapeHtmlAttribute(todo334Data.key) + '\' value=\'checked\'><span style="padding-left:1em">' + soy.$$escapeHtml(todo334Data.description) + '</span></label></li>';
    }
    output += '</ul>';
  } else {
    output += '<p>Great news, you\'re all set. There are no todos at this time.<br>Please check the remediation portal once this questionnaire has been submitted.</p>';
  }
  output += '</fieldset>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  vsaq.questionnaire.templates.todoList.soyTemplateName = 'vsaq.questionnaire.templates.todoList';
}
