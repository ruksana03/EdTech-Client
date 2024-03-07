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


