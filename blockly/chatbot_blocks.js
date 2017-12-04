Blockly.Blocks['user_input'] = {
    init: function() {
        this.setNextStatement(false);
        this.setPreviousStatement(false);
        this.appendDummyInput()
            .appendField('user input');
        this.setOutput(true, 'String');
        this.setColour(160);
        this.setTooltip('Gets the user input');
        this.setHelpUrl('https://uiowa-cs-5800-0001-fall-2017.github.io/Scratchat/tutorial.html');
    }
};

Blockly.JavaScript['user_input'] = function(block) {
  return ["text", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['answer'] = {
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.TEXT_PRINT_TITLE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.texts.HUE,
            "tooltip": Blockly.Msg.TEXT_PRINT_TOOLTIP,
            "helpUrl": Blockly.Msg.TEXT_PRINT_HELPURL
        });
    }
};

Blockly.JavaScript['answer'] = function(a){
    return "insertChat(\"you\", " + (Blockly.JavaScript.valueToCode(a,"TEXT",Blockly.JavaScript.ORDER_NONE)||"''")+", 2000);\n"
};
