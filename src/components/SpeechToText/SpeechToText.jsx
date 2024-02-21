import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {

    const startSpeaking = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    console.log('Transcript:', transcript);

    if (!browserSupportsSpeechRecognition) {
        return  <span>{`Browser doesn't support speech recognition.`}</span>;
    }

    return (
        <div className="py-20 w-4/5 mx-auto">

            <h2 className="headtext__cormorant text-center">Speech To Text Converter</h2>

            <p className="p__cormorant mt-8">{`You can speak after clicking Start Speak, we will convert your speech to text. You can copy the text by clicking copy and you will able to paste anywhere you need the text. Don't forget to click Stop Speak before click on Copy.`}</p>

            <div className="card-body bg-white text-black mt-8 rounded-t-lg">
               {transcript}
            </div>
            <div className="flex justify-center gap-12 mt-2">
                <button className="btn-style">Copy</button>
                <button className="btn-style" onClick={SpeechRecognition.stopListening}>Stop Speak</button>
                <button className="btn-style" onClick={startSpeaking}>Start Speak</button>
            </div>
        </div>
    );
};

export default SpeechToText;