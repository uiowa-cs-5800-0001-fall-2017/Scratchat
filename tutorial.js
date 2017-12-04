var statusFlag = 0;

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

var controlLogic = function(text) {
    if(text.toLowerCase() === "help") {
        insertChat("you", "Sorry, you are on your own...", 0);
    } else if("order pizza" === text.toLowerCase() && statusFlag === 0) {
        statusFlag = 1;
        insertChat("you", "Okay, what topping do you want? Selection: Hawaiian, Hawaiian, and Hawaiian.");
    } else if("order pizza" === text.toLowerCase() && statusFlag !== 0) {
        statusFlag = 0;
        insertChat("you", "Okay, restarting your order. Type \"order pizza\" to order a pizza");
    } else if("hawaiian" === text.toLowerCase() && statusFlag === 1) {
        statusFlag = 2;
        insertChat("you", "Good choice! Type your address, and it will be sent to you right away!");
    } else if("hawaiian" === text.toLowerCase() && statusFlag !== 1) {
        statusFlag = 0;
        insertChat("you", "Sorry, wrong command. Type \"order pizza\" to order a pizza");
    } else if(statusFlag === 2){
        insertChat("you", "This is a testing bot, it doesn't have address checking function, so I will assume you put the right address!");
        statusFlag = 3;
    } else if(statusFlag === 3 && text.toLowerCase() === "confirm") {
        insertChat("you", "cool, actually, we are not a pizza shop, so your pizza won't be ready until we have one open in the near future.");
    }
}

//-- Clear Chat
resetChat();

//insertChat("you", document.getElementById('textarea').innerHTML, 3000);
// //-- Print Messages
insertChat("you", "Hello, welcome to Scratchat tutorial example.", 2000);
insertChat("you", "This is a demo for you to order some pizza.", 4000);
insertChat("you", "Please start by typing \"order pizza\"", 6000);
// insertChat("me", "Hello Tom...", 0);
// insertChat("you", "Hi, Pablo", 1500);
// insertChat("me", "What would you like to talk about today?", 3500);
// insertChat("you", "Tell me a joke",7000);
// insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
// insertChat("you", "LOL", 12000);

//-- NOTE: No use time on insertChat.
