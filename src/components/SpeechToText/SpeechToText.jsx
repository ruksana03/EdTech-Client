// import { useState } from "react";
// import useSpeechToText from "../../Hooks/useSpeechToText";

// const SpeechToText = () => {

//     const [textInput, setTextInput] = useState("");

//     const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true });

//     const stopVoiceInput = () => {
//         setTextInput(preVal => preVal + (transcript.length ? (preVal.length ? " " : "") + transcript : ""))
//         stopListening()
//     };

//     const startStopListening = () => {
//         isListening ? stopVoiceInput() : startListening()
//     };

//     return (
//         <div className="py-20 w-4/5 mx-auto">

//             <h2 className="headtext__cormorant text-center">Speech To Text Converter</h2>

//             <p className="p__cormorant mt-8">{`You can speak after clicking Start Speak, we will convert your speech to text. You can copy the text by clicking copy and you will able to paste anywhere you need the text. Don't forget to click Stop Speak before click on Copy.`}</p>

//             <textarea
//                 className="w-full h-40 p-4"
//                 disabled={isListening}
//                 value={isListening ? textInput + (transcript.length ? (textInput.length ? " " : "") + transcript : "") : textInput}
//                 onChange={(e) => { setTextInput(e.target.value) }} />


//             <div className="flex justify-center gap-12 mt-2">
//                 <button className="btn-style">Copy</button>
//                 <button
//                     className="btn-style"
//                     onClick={startStopListening}
//                 >
//                     {isListening ? "Stop Speaking" : "Start Speaking"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SpeechToText;

import { useEffect } from 'react';

const SpeechToText = () => {
  useEffect(() => {
    let recognition;

    try {
      recognition = new window.webkitSpeechRecognition();
    } catch (e) {
      console.error('Speech recognition not supported.');
      return;
    }

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function (event) {
      let txtRec = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        txtRec += event.results[i][0].transcript;
      }
      document.getElementById('txtArea').value = txtRec;
    };

    document.getElementById('startRecognition').addEventListener('click', function () {
      document.getElementById('txtArea').focus();
      recognition.start();
    });

    document.getElementById('stopRecognition').addEventListener('click', function () {
      recognition.stop();
    });

    return () => {
      document.getElementById('startRecognition').removeEventListener('click');
      document.getElementById('stopRecognition').removeEventListener('click');
    };
  }, []);

  return (
    <div className='pt-20'>
      <button id="startRecognition">Start Recognition</button>
      <button id="stopRecognition">Stop Recognition</button>
      <textarea id="txtArea"></textarea>
    </div>
  );
};

export default SpeechToText;


