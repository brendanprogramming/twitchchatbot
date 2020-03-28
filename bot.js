const tmi = require('tmi.js');

const BOT_USERNAME = 'brendanprogramming';
const BOT_PASSWORD = 'oauth:yngmjl5uzemhhp26lcf2mdui73bh62';

const options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: BOT_USERNAME,
    password: BOT_PASSWORD
  },
  channels: [BOT_USERNAME]
};

const client = new tmi.client(options);
client.connect();

client.on('message', function(channel, userstate, message, self)
{
	if (self) return;

	if ('!hello' == message)
	{
		client.say(channel, "Hello " + userstate.username + "!");
	}
});
