var speechRecognition = window.speechRecognition

var recognition=new speechRecognition()

var textbox =$("#textbox")

var instructions=$("#instructions")

var content=''
recognition.continuous=true
// Recognition is started

recognition.onstart = function(){
    instructions.text("voice recognition is on")
}   
recognition.onspeechend=function(){
    instructions.text("No Activity")
}
recognition.onerror=function(){
    instructions.text("Try again")
}
recognition.onresult=function(event){
    var current=event.resultIndex;
    var transcript = event.results[current][0].transcript

    content +=transcript
    textbox.val(content)
}

$("#start-btn").click(function(event){
if(content.length ){
    content+=''
}
recognition.start()
 
})