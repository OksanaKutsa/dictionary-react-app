import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic row">
        <div className="col-3">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="text col-3 ">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return (
      <div className=" row">
        <div className="col-3 Phonetic onlytext"> {props.phonetic.text}</div>
      </div>
    );
  }
}
