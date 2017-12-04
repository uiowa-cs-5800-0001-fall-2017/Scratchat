var statusFlag = 0;

var workspace = Blockly.inject('blocklyDiv',{toolbox: document.getElementById('toolbox')});

workspace.addChangeListener(function(event) {
  document.getElementById('textarea').innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
});

var me = {};
me.avatar = "res/avatar.png";

var you = {};
you.avatar = "res/avatar.png";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "you"){

        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +
                  '</li>';
    }
    setTimeout(
        function(){
            $("ul").append(control);
        }, time);

}

function testScript() {
    resetChat();
    window.alert("test ready");
    $("#test").html('<script>\
    var controlLogic = function(text) {'
        + document.getElementById('textarea').innerHTML +
    '}</script>');
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);
            controlLogic(text);
            $(this).val('');
        }
    }
});


//-- Clear Chat
resetChat();

// //-- Print Messages
insertChat("you", "Hello, welcome to Scratchat", 2000);
insertChat("you", "How can i help you today?", 2700);
//-- NOTE: No use time on insertChat.
