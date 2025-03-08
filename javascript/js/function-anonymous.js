let say = function(name){
    console.log(`hello ${name}`)
}

say("adam")

function giveMyName(callback){
    callback("eko")
}

giveMyName(say)