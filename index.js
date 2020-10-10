require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const curl = new (require('curl-request'))();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
    switch (msg.content) {
        case '/ping':
            msg.reply('Pong!')
            break;
        case '/help':
            msg.reply("\n/help - returns this message" +
                "\n/ping - checks if bot can hear you" +
                "\n/height" +
                "\n/info" +
                "\n/reward/last" +
                "\n/reward/next" +
                "\n/status" +
                "\n/supply" +
                "\n/pool/list" +
                // "\n/pool/list/available" +
                // "\n/pool/list/online" +
                "\n/node/list" +
                // "\n/node/list/available" +
                // "\n/node/list/online" +
                "\n/node/stats" +
                "\n/block/count" +
                "\n/block/header/top"
                // "\n" +
                // "\n" +
                // "\n" +
                // "\n" +
                // "\n" +
                // "\n" +
                // "\n" +

            )
            break;
        case "/height":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/height')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    var temp = body;
                    var formated = JSON.parse(temp);
                    if (body) {
                        msg.reply("height: " + formated['height']);
                    }
                    else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/info":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/info')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        var temp = body;
                        var formated = JSON.parse(temp);
                        var start_time = new Date(0);
                        start_time.setUTCSeconds(formated['start_time']);
                        msg.reply("\nHeight: " + formated['height'] +
                            "\nDifficulty: " + formated['difficulty'] +
                            "\nTx Count: " + formated['tx_count'] +
                            "\nTX Pool Size: " + formated['tx_pool_size'] +
                            "\nAlt Blocks Count: " + formated['alt_blocks_count'] +
                            "\nOutgoing Connections Count: " + formated['outgoing_connections_count'] +
                            "\nIncoming Connections Count: " + formated['incoming_connections_count'] +
                            "\nWhite Peerlist Size: " + formated['white_peerlist_size'] +
                            "\nGrey Peerlist Size: " + formated['grey_peerlist_size'] +
                            "\nLast Known Block Index: " + formated['last_known_block_index'] +
                            "\nNetwork Heights: " + formated['network_height'] +
                            "\nUpgrade Heights: " + formated['upgrade_heights'] +
                            "\nSupported Height: " + formated['supported_height'] +
                            "\nHashrate: " + formated['hashrate'] +
                            "\nSynced: " + formated['synced'] +
                            "\nMajor Version: " + formated['major_version'] +
                            "\nMinon Version: " + formated['minor_version'] +
                            "\nVersion: " + formated['version'] +
                            "\nStatus: " + formated['status'] +
                            "\nStart Time: " + start_time +
                            "\nCache API: " + formated['isCacheApi']
                        );
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/reward/last":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/reward/last')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        msg.reply("last reward: " + body);
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/reward/next":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/reward/next')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        msg.reply("next reward: " + body);
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/status":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/reward/status')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        msg.reply(body);
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/supply":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/supply')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        msg.reply("Supply: " + body);
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/pool/list":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/pool/list')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        var temp = body;
                        var formated = JSON.parse(temp);
                        msg.reply("the current pools are as follows:")
                        formated['pools'].forEach(element => {
                            msg.reply(element['url']);
                        });
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        // case "/pool/list/available":
        //     curl.setHeaders([
        //         'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        //     ])
        //         .get('https://restapi.cryptopay.org.za/pool/list/available')
        //         .then(({ statusCode, body, headers }) => {
        //             console.log(statusCode, body, headers)
        //             if (body) {
        //                 msg.reply(body);
        //             } else { msg.reply("unable to complete your request at this time, please try again later") }
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        //     break;
        // case "/pool/list/online":
        //     curl.setHeaders([
        //         'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        //     ])
        //         .get('https://restapi.cryptopay.org.za/pool/list/online')
        //         .then(({ statusCode, body, headers }) => {
        //             console.log(statusCode, body, headers)
        //             if (body) {
        //                 msg.reply(body);
        //             } else { msg.reply("unable to complete your request at this time, please try again later") }
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        //     break;
        case "/node/list":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/node/list')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        var temp = body;
                        var formated = JSON.parse(temp);
                        msg.reply("the current nodes are as follows:")
                        formated['nodes'].forEach(element => {
                            if (element["online"]) {
                                msg.reply("\nname: " + element['name'] + "\nlink: " + element['url'] + "\nfee: 0." + element['fee']["amount"] + "\nAddress: " + element['fee']['address']);
                            }
                        });
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        // case "/node/list/available":
        //     curl.setHeaders([
        //         'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        //     ])
        //         .get('https://restapi.cryptopay.org.za/node/list/available')
        //         .then(({ statusCode, body, headers }) => {
        //             console.log(statusCode, body, headers)
        //             if (body) {
        //                 msg.reply(body);
        //             } else { msg.reply("unable to complete your request at this time, please try again later") }
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        //     break;
        // case "/node/list/online":
        //     curl.setHeaders([
        //         'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        //     ])
        //         .get('https://restapi.cryptopay.org.za/node/list/online')
        //         .then(({ statusCode, body, headers }) => {
        //             console.log(statusCode, body, headers)
        //             if (body) {
        //                 msg.reply(body);
        //             } else { msg.reply("unable to complete your request at this time, please try again later") }
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        //     break;
        case "/node/stats":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/node/stats')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        var temp = body;
                        var formated = JSON.parse(temp);
                        // console.log(formated);
                        msg.reply("the stats of current nodes are as follows:")
                        formated.forEach(element => {
                            if (element["online"]) {
                                msg.reply("\nname: " + element['name'] +
                                    "\nlink: " + element['url'] +
                                    "\nfee: 0." + element['fee']["amount"] +
                                    "\nAddress: " + element['fee']['address'] +
                                    "\nAvailability: " + element['availability'] +
                                    "\nonline: " + element['online'] +
                                    "\nversion: " + element['version'] +
                                    "\ntimestamp: " + element['timestamp'] +
                                    "\nheight: " + element['height'] +
                                    "\nconnectionsIn: " + element['connectionsIn'] +
                                    "\nconnectionsOut: " + element['connectionsOut'] +
                                    "\ndifficulty: " + element['difficulty'] +
                                    "\nhashrate: " + element['hashrate'] +
                                    "\ntxPoolSize: " + element['txPoolSize']);
                            }
                            else {
                                msg.reply("\nname: " + element['name'] + "\nonline: " + element['online']);
                            }
                        });
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/block/count":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/block/count')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    var temp = body;
                    var formated = JSON.parse(temp);
                    if (body) {
                        msg.reply(formated['blockCount']);
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        case "/block/header/top":
            curl.setHeaders([
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            ])
                .get('https://restapi.cryptopay.org.za/block/header/top')
                .then(({ statusCode, body, headers }) => {
                    console.log(statusCode, body, headers)
                    if (body) {
                        var temp = body;
                        var formated = JSON.parse(temp);
                        console.log(formated);
                        // console.log(formated['hash']);
                        // msg.reply("the stats of current nodes are as follows:")
                        msg.reply(
                            "\nhash:" + formated['hash'] +
                            "\nprevHash:" + formated['prevHash'] +
                            "\nheight:" + formated['height'] +
                            "\nbaseReward:" + formated['baseReward'] +
                            "\ndifficulty:" + formated['difficulty'] +
                            "\nmajorVersion:" + formated['majorVersion'] +
                            "\nminorVersion:" + formated['minorVersion'] +
                            "\nnonce:" + formated['nonce'] +
                            "\nsize:" + formated['size'] +
                            "\ntimestamp:" + formated['timestamp'] +
                            "\nalreadyGeneratedCoins:" + formated['alreadyGeneratedCoins'] +
                            "\nalreadyGeneratedTransactions:" + formated['alreadyGeneratedTransactions'] +
                            "\nreward: " + formated['reward'] +
                            "\nsizeMedian:" + formated['sizeMedian'] +
                            "\ntotalFeeAmount:" + formated['totalFeeAmount'] +
                            "\ntransactionsCumulativeSize:" + formated['transactionsCumulativeSize'] +
                            "\ntransactionCount:" + formated['transactionCount'] +
                            "\npoolId:" + formated['poolId'] +
                            "\npoolName:" + formated['poolName'] +
                            "\npoolURL:" + formated['poolURL'] +
                            "\ndepth: " + formated['depth']
                        );
                    } else { msg.reply("unable to complete your request at this time, please try again later") }
                })
                .catch((e) => {
                    console.log(e);
                });
            break;
        // case "/transaction/pool":
        //     curl.setHeaders([
        //         'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        //     ])
        //         .get('https://restapi.cryptopay.org.za/transaction/pool')
        //         .then(({ statusCode, body, headers }) => {
        //             console.log(statusCode, body, headers)
        //             if (body) {
        //                 msg.reply(body);
        //             } else { msg.reply("unable to complete your request at this time, please try again later") }
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
        //     break;
        default:
    }
})
client.login(process.env.BOT_TOKEN)
