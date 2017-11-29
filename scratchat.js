var workspace = Blockly.inject('blocklyDiv',{toolbox: document.getElementById('toolbox')});

workspace.addChangeListener(function(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('textarea').innerHTML = "while(1) { " + code + " }";
});
