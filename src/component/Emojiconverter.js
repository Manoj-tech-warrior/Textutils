import React, { useState } from "react";

// Mapping of text to emoji and vice versa
const emojiMap = {
    Khush: "😊",
    Dukhi: "😢",
    Pyaar: "❤️",
    Gussa: "😡",
    Hello: "👋",
    Hassi: "😂",
    Sahihai: "👍",
    Galat : "👎",
    Taali: "👏",
    Dil: "💖",
    TootaDil: "💔",
    Taara: "⭐",
    Aag: "🔥",
    Mast: "😎",
    Rona: "😭",
    Neend: "😴",
    Chaukna: "😲",
    Sochna: "🤔",
    Aankhmaarna: "😉",
    Pappi: "😘",
    Party: "🥳",
    Celebration: "🎉",
    Galelagna: "🤗",
    Haathmilana: "🤝",
    Taqatdikhana: "💪",
    Lehar: "🌊",
    Suraj: "☀️",
    Chand: "🌙",
    Barish: "🌧️",
    Baadal: "☁️",
    Bijli: "⚡",
    Indradhanush: "🌈",
    Gulab: "🌹",
    Ped: "🌳",
    Seb: "🍎",
    Tarbuj: "🍉",
    Pizza: "🍕",
    Burger: "🍔",
    FrenchFries: "🍟",
    Cake: "🎂",
    Chocolate: "🍫",
    Coffee: "☕",
    Chai: "🍵",
    Beer: "🍺",
    Sharab: "🍷",
    Football: "⚽",
    Basketball: "🏀",
    Cricket: "🏏",
    Trophy: "🏆",
    Medal: "🎖️",
    HawaiJahaz: "✈️",
    Gadi: "🚗",
    Train: "🚆",
    Cycle: "🚲",
    Jahaz: "🚢",
    Rocket: "🚀",
    Dharti: "🌍",
    Globe: "🌎",
    Kitabein: "📚",
    Laptop: "💻",
    Mobile: "📱",
    Camera: "📷",
    VideoCamera: "🎥",
    Guitar: "🎸",
    Mic: "🎤",
    Headphones: "🎧",
    Ghanti: "🔔",
    Ghadi: "⏰",
    Calendar: "📅",
    Paise: "💰",
    Purse: "👛",
    Shopping: "🛍️",
    Hathoda: "🔨",
    Pana: "🔧",
    Bulb: "💡",
    Recycle: "♻️",
    Chetaavni: "⚠️",
    Ruko: "🛑",
    Kankaal: "💀",
    Bhoot: "👻",
    Alien: "👽",
    Robot: "🤖",
    Billi: "🐱",
    Kutta: "🐶",
    Sher: "🦁",
    Baagh: "🐯",
    Bhaloo: "🐻",
    Bandar: "🐵",
    Murga: "🐔",
    Ghoda: "🐴",
    Machhli: "🐟",
    Whale: "🐳",
    Dolphin: "🐬",
    Haathi: "🐘",
    Zebra: "🦓",
    Koala: "🐨",
    Mendhak: "🐸",
    Surajmukhi: "🌻",
    KaantaCactus: "🌵",
    Barf: "❄️",
    Wow: "🤩",
    ThakaHua: "😫",
    Padhaku: "🤓",
    DarGaya: "😱",
    Chheenkna: "🤧",
    Beemar: "🤢",
    Shaitan: "😈",
    Farishta: "😇",
    
      
      
};

const reverseEmojiMap = Object.fromEntries(
  Object.entries(emojiMap).map(([key, value]) => [value, key])
);

function TextEmojiConverter(props) {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  // Function to convert text to emoji
  const convertToEmoji = () => {
    const words = text.split(" ");
    const emojiText = words
      .map((word) => emojiMap[word.toLowerCase()] || word) // Replace text with emoji if exists
      .join(" ");
    setConvertedText(emojiText);
  };

  // Function to convert emoji to text
  const convertToText = () => {
    const characters = text.split(" ");
    const textResult = characters
      .map((char) => reverseEmojiMap[char] || char) // Replace emoji with text if exists
      .join(" ");
    setConvertedText(textResult);
  };

  return (
    <div className="conttaibner">
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{
        color:props.mode==='dark'?'white':'black'
      }} >Text ↔ Emoji Converter</h1>

      {/* Input Text Area */}
      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text or emojis here..."
        rows="5"
        style={{
          width: "90%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'
        }}
      ></textarea>

      {/* Buttons */}
      <button
        className="btn btn-primary"
        onClick={convertToEmoji}
        style={{ marginRight: "10px" ,
          color:props.mode==='dark'?'white':'black' }}
        
      >
        Convert to Emoji
      </button>
      <button className="btn btn-secondary" style={{color:props.mode==='dark'?'white':'black'}} onClick={convertToText}>
        Convert to Text
      </button>

      {/* Output */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{color:props.mode==='dark'?'white':'black',}}>Converted Text</h3>
        <p style={{ fontSize: "18px" }}>{convertedText}</p>
      </div>
    </div>
    </div>
  );
}

export default TextEmojiConverter;
