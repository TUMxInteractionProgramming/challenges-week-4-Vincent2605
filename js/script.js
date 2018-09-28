console.log('app is alive');
console.log('current channel', currentChannel);

var currentChannel;

var currentLocation = {
    longitude: 48.264976,
    latitude: 11.668641,
    what3words: "dose.verse.lunged"
};

function switchChannel(channelVar, channelName, channelCreator) {
    console.log('Turning into channel', channelVar);
    currentChannel = channelVar;
    console.log('current channel', currentChannel);
    $('#rightside .app-bar span').html(channelName);
    $('#rightside .app-bar strong').html('<a href="https://map.what3words.com/'+channelCreator+'" target="_blank">'+
    channelCreator+'</a>');
    $('#channels li').removeClass('selected-channel');
    $('#channels li:contains('+channelName+')').addClass('selected-channel');
    $('#rightside .app-bar i').removeClass('fas fa-star');
    $('#rightside .app-bar i').removeClass('far fa-star');
    var starStatus = $(channelVar.starred).val();
    var starStatus2 = (starStatus=true)? "fas fa-star": "far fa-star";
    $('#rightside .app-bar i').addClass(starStatus2);
};
function likeChannel() {
    $('#rightside .app-bar i').toggleClass('fas far');
};
function selectTab(tabID) {
    $('#tab-bar button').removeClass('selected-tab');
    $(tabID).addClass('selected-tab')
    console.log('Changing to Tab ' + tabID)
};
function showEmojis()  {
    $('#emojis').toggle();
};
function Message(text) {
    createdBy = currentLocation.what3words;
    latitude = currentLocation.latitude;
    longitude = currentLocation.longitude;
    createdOn = new Date();
    expiresOn = '15';
    // function () {
    //     return new Date(Date.now().getTime() + 15*60000);
    this.text = text;
    own = true;
};
function sendMessage() {
    var messageContent = $('#message-input').val();
    var newMessage = new Message(messageContent);
    console.log(newMessage);
    $('<div class="message own-message"><h3><strong><a href="https://map.what3words.com/'+currentLocation.what3words+'">'+currentLocation.what3words+'</a></strong> '+createdOn+' <span class="remaining-time">'+expiresOn+'min left</span></h3><p>'+messageContent+' <button>+5min</button></p></div>').appendTo('#chat');
    // createMessageElement(messageContent).appendTo('#chat');
};
function createMessageElement(content) { 

}
