require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const curl = new (require( 'curl-request' ))();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  switch (msg.content) {
    case '/ping':
    msg.reply('Pong!')
    break;
    case '/help':
    msg.reply("/help - returns this message\n/p CPA - gets CoinGecko's price of CPA\n/getinfo - Gets current CPA coin info\n/height - Gets current CPA coin height\n/hashrate - Gets current CPA coin hashrate\n/reward - Gets current CPA coin reward\n/supply - Get current CPA coin Supply")
    break;
    case '/height':
    curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('http://api.cryptopay.org.za/q/height/')
    .then(({statusCode, body, headers}) => {
      msg.reply(body)
    })
    .catch((e) => {
      console.log(e);
    });
    break;
    case '/getinfo':
    curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('http://51.15.120.178:13281/getinfo')
    .then(({statusCode, body, headers}) => {
      var temp = body;
      var formated=JSON.parse(temp);
      msg.reply("already_generated_coins "+formated['already_generated_coins']+
      "\nalt_blocks_count"+formated['alt_blocks_count']+
      "\nblock_major_version"+ formated['block_major_version']+
      "\nblock_minor_version"+ formated['block_minor_version']+
      "\ncontact"+ formated['contact']+
      "\ndifficulty"+ formated['difficulty']+
      "\n\nfee_address"+ formated['fee_address']+
      "\n\ngrey_peerlist_size"+ formated['grey_peerlist_size']+
      "\nheight"+ formated['height']+
      "\nincoming_connections_count"+ formated['incoming_connections_count']+
      "\nlast_block_difficulty"+ formated['last_block_difficulty']+
      "\nlast_block_reward"+ formated['last_block_reward']+
      "\nlast_block_timestamp"+ formated['last_block_timestamp']+
      "\nlast_known_block_index"+ formated['last_known_block_index']+
      "\noutgoing_connections_count"+ formated['outgoing_connections_count']+
      "\nstatus"+ formated['status']+
      "\ntop_block_hash"+ formated['top_block_hash']+
      "\ntx_count"+ formated['tx_count']+
      "\ntx_pool_size"+ formated['tx_pool_size']+
      "\nversion"+formated['version']+
      "\nwhite_peerlist_size"+formated['white_peerlist_size'])
    })
    .catch((e) => {
      console.log(e);
    });
    break;
    case "/hashrate":
    curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('http://api.cryptopay.org.za/q/hashrate/')
    .then(({statusCode, body, headers}) => {
      msg.reply(body)
    })
    .catch((e) => {
      console.log(e);
    });
    break;
    case "/reward":
    curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('http://api.cryptopay.org.za/q/reward/')
    .then(({statusCode, body, headers}) => {
      msg.reply(body)
    })
    .catch((e) => {
      console.log(e);
    });
    break;

    case "/supply":
    curl.setHeaders([
      'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('http://api.cryptopay.org.za/q/supply/')
    .then(({statusCode, body, headers}) => {
      msg.reply(body)
    })
    .catch((e) => {
      console.log(e);
    });
    break;
    default:

  }
})
client.login(process.env.BOT_TOKEN)
