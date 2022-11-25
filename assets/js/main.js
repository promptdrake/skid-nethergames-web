

let changetitle = document.title = yourservername;
function discordinvite() {
  window.location.href = discordinvitelink;
}
function facebook() {
  window.location.href = facebookURL;
}
function twitter() {
  window.location.href = twitterURL;
}
function store() {
  window.location.href = storeURL;
}

    fetch("https://api.mcsrvstat.us/bedrock/2/" + minecraftBedrockIP)
           .then(function(resp) {
             return resp.json();
           })
           .then(function(data){
         document.getElementById("playercount").innerHTML = data.players.online;
         document.getElementById("servername").innerHTML = data.motd.html;
            document.getElementById("testserver").innerHTML = '<span style="color: #00ff55">• Online</span>';
           })
           .catch(error => {
             console.error(error);
             document.getElementById("playercount").innerHTML = 'Offline';
         document.getElementById("servername").innerHTML = 'Offline';
             document.getElementById("testserver").innerHTML = '<span style="color: red">• Offline</span>';
           })
           fetch("https://discordapp.com/api/guilds/" + discordserverID + "/widget.json")
           .then(function(resp) {
             return resp.json();
           })
           .then(function(discord){
            document.getElementById('userdiscordonline').innerHTML = discord.members.length;
           })
           .catch(error => {
             console.error(error);
             document.write("<p style='color: green;font-weight: bold;'> [INFO-DISCORDAPI]: <span>" + error + '</span></p>')
           })