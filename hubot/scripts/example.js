'use strict'

module.exports = (robot) => {

  
 
 //Have a message post to Slack based on user input
  robot.hear(/hello/, function(res) {
    let responses = ["Hello!", "Hi!","Wetin dey hapun", "Alsalam alikem"]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });

  robot.hear(/hi/, function(res) {
    let responses = ["Hello!", "Hi!","Wetin dey hapun", "Alsalam alikem" ]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });

 
  robot.hear(/what sutable car for me/, function(res) {
    let responses = ["Lamborghini", "Ferrari" ]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });

// Use at least 1 conditional to change the outcome of a Slackbot.
  robot.respond(/give me (.*) phone number/i, (res) => {
    const phonenumber = res.match[1]
  
    if (phonenumber === 'lamia') {
      res.reply('0502571252')
      return
     
    }
   if (phonenumber === 'shahad') {
      res.reply('0555417852')
      return
   }
    
  
    res.reply(` I dont have ${phonenumber} phone number `)
  })

  robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
    const room = req.params.room
    const data = JSON.parse(req.body.payload)
    const secret = data.secret
  
    robot.messageRoom(room, `I have a secret: ${secret}`)
  
    res.send('OK')
  })

//  //

  robot.respond(/alarm after (.*) minutes/, (res) => {
    const time = res.match[1]
    setTimeout(() => res.send(`!!~~Alarm ${time} Minutes~~!!`), 60 *(time*1000) )
  })


//  //

  robot.error((error, response) => {
    const message = `DOES NOT COMPUTE: ${error.toString()}`
    robot.logger.error(message)
  
    if (response) {
      response.reply(message)
    }
  })
 
  }

