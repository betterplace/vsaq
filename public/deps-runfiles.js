// This file was autogenerated by depswriter.py.
// Please do not edit.
goog.addDependency('../../../../third_party/closure-templates-compiler/soyutils_usegoog.js', ['soy', 'soy.StringBuilder', 'soy.asserts', 'soy.esc', 'soydata', 'soydata.SanitizedHtml', 'soydata.SanitizedHtmlAttribute', 'soydata.SanitizedJs', 'soydata.SanitizedJsStrChars', 'soydata.SanitizedUri', 'soydata.VERY_UNSAFE'], ['goog.array', 'goog.asserts', 'goog.debug', 'goog.dom.DomHelper', 'goog.format', 'goog.html.SafeHtml', 'goog.html.SafeStyle', 'goog.html.SafeUrl', 'goog.html.TrustedResourceUrl', 'goog.html.uncheckedconversions', 'goog.i18n.BidiFormatter', 'goog.i18n.bidi', 'goog.object', 'goog.soy', 'goog.soy.data.SanitizedContent', 'goog.soy.data.SanitizedContentKind', 'goog.string', 'goog.string.Const', 'goog.string.StringBuffer'], false);
goog.addDependency('../../../build/templates/vsaq/static/questionnaire/templates.soy.js', ['vsaq.questionnaire.templates'], ['soy', 'soydata'], false);
goog.addDependency('../vsaq/static/dialoghelper.js', ['vsaq.helpers.Dialog'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy'], false);
goog.addDependency('../vsaq/static/qpage_base.js', ['vsaq.QpageBase'], ['goog.array', 'goog.dom', 'goog.events', 'goog.events.EventType', 'goog.structs', 'goog.ui.Tooltip', 'vsaq.Questionnaire', 'vsaq.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/blockitems.js', ['vsaq.questionnaire.items.BlockItem'], ['goog.array', 'goog.dom', 'goog.soy', 'goog.string', 'vsaq.questionnaire.items.ContainerItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates'], false);
goog.addDependency('../vsaq/static/questionnaire/blockitems_test.js', ['vsaq.questionnaire.items.BlockItemsTests'], ['goog.dom', 'goog.dom.TagName', 'goog.dom.classlist', 'goog.testing.MockControl', 'goog.testing.events', 'goog.testing.jsunit', 'goog.testing.mockmatchers.ObjectEquals', 'vsaq.questionnaire.items.BlockItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.RadioItem'], false);
goog.addDependency('../vsaq/static/questionnaire/boxitem.js', ['vsaq.questionnaire.items.BoxItem'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/boxitem_test.js', ['vsaq.questionnaire.items.BoxItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.dom.classlist', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.BoxItem'], false);
goog.addDependency('../vsaq/static/questionnaire/checkitem.js', ['vsaq.questionnaire.items.CheckItem'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/checkitem_test.js', ['vsaq.questionnaire.items.CheckItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.CheckItem'], false);
goog.addDependency('../vsaq/static/questionnaire/containeritem.js', ['vsaq.questionnaire.items.ContainerItem'], ['goog.array', 'goog.dom', 'vsaq.questionnaire.items.Item'], false);
goog.addDependency('../vsaq/static/questionnaire/containeritem_test.js', ['vsaq.questionnaire.items.ContainerItemTests'], ['goog.array', 'goog.testing.jsunit', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.ContainerItem'], false);
goog.addDependency('../vsaq/static/questionnaire/groupitem.js', ['vsaq.questionnaire.items.CheckgroupItem', 'vsaq.questionnaire.items.GroupItem', 'vsaq.questionnaire.items.RadiogroupItem'], ['goog.array', 'goog.dom', 'goog.events', 'goog.object', 'goog.soy', 'goog.string', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.ContainerItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates'], false);
goog.addDependency('../vsaq/static/questionnaire/groupitem_test.js', ['vsaq.questionnaire.items.GroupItemTests'], ['goog.array', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.CheckgroupItem', 'vsaq.questionnaire.items.GroupItem', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.RadiogroupItem'], false);
goog.addDependency('../vsaq/static/questionnaire/infoitem.js', ['vsaq.questionnaire.items.InfoItem'], ['goog.dom', 'goog.soy', 'goog.string', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.templates'], false);
goog.addDependency('../vsaq/static/questionnaire/infoitem_test.js', ['vsaq.questionnaire.items.InfoItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.testing.jsunit', 'vsaq.questionnaire.items.InfoItem'], false);
goog.addDependency('../vsaq/static/questionnaire/items.js', ['vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ItemArray', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.items.factory'], ['goog.debug.Error', 'goog.dom', 'goog.dom.classlist', 'goog.events.EventTarget', 'goog.object', 'goog.string', 'goog.structs.LinkedMap', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/items_test.js', ['vsaq.questionnaire.items.ItemTests'], ['goog.array', 'goog.events.EventTarget', 'goog.testing.MockControl', 'goog.testing.jsunit', 'goog.testing.mockmatchers.ObjectEquals', 'vsaq.questionnaire.items.BlockItem', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.CheckgroupItem', 'vsaq.questionnaire.items.GroupItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.LineItem', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.RadiogroupItem', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.items.YesNoItem', 'vsaq.questionnaire.items.factory'], false);
goog.addDependency('../vsaq/static/questionnaire/lineitem.js', ['vsaq.questionnaire.items.LineItem'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/lineitem_test.js', ['vsaq.questionnaire.items.LineItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.testing.jsunit', 'vsaq.questionnaire.items.LineItem'], false);
goog.addDependency('../vsaq/static/questionnaire/questionnaire.js', ['vsaq.Questionnaire', 'vsaq.questionnaire.QuestionnaireError'], ['goog.Promise', 'goog.array', 'goog.debug.Console', 'goog.debug.Error', 'goog.dom', 'goog.events', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.json', 'goog.log', 'goog.object', 'goog.soy', 'goog.structs', 'vsaq.questionnaire.items.BlockItem', 'vsaq.questionnaire.items.BoxItem', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.CheckgroupItem', 'vsaq.questionnaire.items.GroupItem', 'vsaq.questionnaire.items.InfoItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.LineItem', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.RadiogroupItem', 'vsaq.questionnaire.items.SpacerItem', 'vsaq.questionnaire.items.TipItem', 'vsaq.questionnaire.items.UploadItem', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.items.YesNoItem', 'vsaq.questionnaire.items.factory', 'vsaq.questionnaire.templates'], false);
goog.addDependency('../vsaq/static/questionnaire/questionnaire_editor.js', ['vsaq.QuestionnaireEditor'], ['goog.Uri', 'goog.array', 'goog.debug.Error', 'goog.dom', 'goog.dom.TagName', 'goog.dom.classlist', 'goog.dom.forms', 'goog.events', 'goog.events.EventType', 'goog.format.JsonPrettyPrinter', 'goog.json', 'goog.json.Serializer', 'goog.object', 'goog.soy', 'goog.string', 'goog.structs.LinkedMap', 'goog.ui.ScrollFloater', 'goog.ui.Textarea', 'vsaq.questionnaire.items.ContainerItem', 'vsaq.questionnaire.items.GroupItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.items.factory', 'vsaq.questionnaire.templates', 'vsaq.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/questionnaire_editor_test.js', ['vsaq.QuestionnaireEditorTest'], ['goog.array', 'goog.dom', 'goog.json', 'goog.object', 'goog.string', 'goog.structs.LinkedMap', 'goog.testing.PropertyReplacer', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.Questionnaire', 'vsaq.QuestionnaireEditor'], false);
goog.addDependency('../vsaq/static/questionnaire/questionnaire_test.js', ['vsaq.QuestionnaireTest'], ['goog.array', 'goog.dom', 'goog.events', 'goog.events.EventType', 'goog.json', 'goog.object', 'goog.testing.MockControl', 'goog.testing.jsunit', 'vsaq.Questionnaire', 'vsaq.questionnaire.items.BlockItem', 'vsaq.questionnaire.items.BoxItem', 'vsaq.questionnaire.items.CheckItem', 'vsaq.questionnaire.items.CheckgroupItem', 'vsaq.questionnaire.items.InfoItem', 'vsaq.questionnaire.items.LineItem', 'vsaq.questionnaire.items.RadioItem', 'vsaq.questionnaire.items.RadiogroupItem', 'vsaq.questionnaire.items.SpacerItem', 'vsaq.questionnaire.items.TipItem', 'vsaq.questionnaire.items.UploadItem', 'vsaq.questionnaire.items.YesNoItem', 'vsaq.questionnaire.items.factory'], false);
goog.addDependency('../vsaq/static/questionnaire/radioitem.js', ['vsaq.questionnaire.items.RadioItem'], ['goog.array', 'goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/radioitem_test.js', ['vsaq.questionnaire.items.RadioItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.events', 'goog.events.EventType', 'goog.testing.asserts', 'goog.testing.events', 'goog.testing.events.Event', 'goog.testing.jsunit', 'vsaq.questionnaire.items.BlockItem', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.RadioItem'], false);
goog.addDependency('../vsaq/static/questionnaire/spaceritem.js', ['vsaq.questionnaire.items.SpacerItem'], ['goog.dom', 'goog.soy', 'vsaq.questionnaire.items.Item', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.templates'], false);
goog.addDependency('../vsaq/static/questionnaire/spaceritem_test.js', ['vsaq.questionnaire.items.SpacerItemTests'], ['goog.dom.TagName', 'goog.dom.classlist', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.SpacerItem'], false);
goog.addDependency('../vsaq/static/questionnaire/tipitem.js', ['vsaq.questionnaire.items.TipItem'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'goog.string', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/tipitem_test.js', ['vsaq.questionnaire.items.TipItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.TipItem'], false);
goog.addDependency('../vsaq/static/questionnaire/uploaditem.js', ['vsaq.questionnaire.items.UploadItem'], ['goog.array', 'goog.dom', 'goog.events', 'goog.events.EventType', 'goog.net.EventType', 'goog.net.IframeIo', 'goog.net.XhrIo', 'goog.soy', 'goog.string', 'goog.string.format', 'goog.style', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/uploaditem_test.js', ['vsaq.questionnaire.items.UploadItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.net.IframeIo', 'goog.net.XhrIo', 'goog.style', 'goog.testing.MockControl', 'goog.testing.PropertyReplacer', 'goog.testing.events', 'goog.testing.jsunit', 'goog.testing.mockmatchers', 'goog.testing.net.XhrIo', 'vsaq.questionnaire.items.UploadItem'], false);
goog.addDependency('../vsaq/static/questionnaire/utils.js', ['vsaq.questionnaire.utils', 'vsaq.questionnaire.utils.InvalidExpressionError', 'vsaq.questionnaire.utils.globals'], ['goog.array', 'goog.debug.Error', 'goog.dom'], false);
goog.addDependency('../vsaq/static/questionnaire/utils_test.js', ['vsaq.questionnaire.items.UtilsTests'], ['goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/yesnoitem.js', ['vsaq.questionnaire.items.YesNoItem'], ['goog.dom', 'goog.events', 'goog.events.EventType', 'goog.soy', 'vsaq.questionnaire.items.ParseError', 'vsaq.questionnaire.items.ValueItem', 'vsaq.questionnaire.templates', 'vsaq.questionnaire.utils'], false);
goog.addDependency('../vsaq/static/questionnaire/yesnoitem_test.js', ['vsaq.questionnaire.items.YesNoItemTests'], ['goog.dom', 'goog.dom.TagName', 'goog.dom.classlist', 'goog.testing.asserts', 'goog.testing.jsunit', 'vsaq.questionnaire.items.YesNoItem'], false);
goog.addDependency('../vsaq/static/utils.js', ['vsaq.utils'], ['goog.array', 'goog.dom', 'goog.dom.classlist', 'goog.dom.forms', 'goog.events', 'goog.events.EventType', 'goog.object', 'goog.string', 'goog.string.format', 'goog.structs'], false);
