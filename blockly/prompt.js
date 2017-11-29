Blockly.Blocks['text_prompt_ext'] = {
  /**
   * Block for prompt function (external message).
   * @this Blockly.Block
   */
  init: function() {
    var TYPES = [
      [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, 'TEXT'],
      [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, 'NUMBER']
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendValueInput('TEXT')
        .appendField(dropdown, 'TYPE');
    this.setOutput(true, 'String');
    this.setTooltip(function() {
      return (thisBlock.getFieldValue('TYPE') == 'TEXT') ?
          Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT :
          Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  }
