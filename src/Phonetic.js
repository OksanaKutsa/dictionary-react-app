import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="Phonetic"> {props.phonetic.text}</div>;
  }

  //   return (
  //     <div className="Phonetic">
  //       <ReactAudioPlayer src={props.phonetic.audio} controls />
  //       {/* <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
  //         {" "}
  //         Listen
  //       </a> */}
  //       <br />
  //       {props.phonetic.text}
  //     </div>
  //   );
}
