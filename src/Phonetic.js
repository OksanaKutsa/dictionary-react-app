import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <div className="Phonetic text"> {props.phonetic.text}</div>;
  }
}
