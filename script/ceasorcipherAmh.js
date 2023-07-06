class AmhCeasorCipher {
  constructor(
    string = "ይህ ሳይፈር ሲዘር መልእክት ኢንክሪፕት ዲክሪፕት ሙከራ መልእክት ነው",
    shuffel = 5
  ) {
    this.string = string;
    this.shuffel = shuffel;
  }

  amhLetters = [
    "ሀ",
    "ሁ",
    "ሂ",
    "ሃ",
    "ሄ",
    "ህ",
    "ሆ",
    "ለ",
    "ሉ",
    "ሊ",
    "ላ",
    "ሌ",
    "ል",
    "ሎ",
    "ሐ",
    "ሑ",
    "ሒ",
    "ሓ",
    "ሔ",
    "ሕ",
    "ሖ",
    "መ",
    "ሙ",
    "ሚ",
    "ማ",
    "ሜ",
    "ም",
    "ሞ",
    "ሠ",
    "ሡ",
    "ሢ",
    "ሣ",
    "ሤ",
    "ሥ",
    "ሦ",
    "ረ",
    "ሩ",
    "ሪ",
    "ራ",
    "ሬ",
    "ር",
    "ሮ",
    "ሰ",
    "ሱ",
    "ሲ",
    "ሳ",
    "ሴ",
    "ስ",
    "ሶ",
    "ሸ",
    "ሹ",
    "ሺ",
    "ሻ",
    "ሼ",
    "ሽ",
    "ሾ",
    "ቀ",
    "ቁ",
    "ቂ",
    "ቃ",
    "ቄ",
    "ቅ",
    "ቆ",
    "በ",
    "ቡ",
    "ቢ",
    "ባ",
    "ቤ",
    "ብ",
    "ቦ",
    "ቨ",
    "ቩ",
    "ቪ",
    "ቫ",
    "ቬ",
    "ቭ",
    "ቮ",
    "ተ",
    "ቱ",
    "ቲ",
    "ታ",
    "ቴ",
    "ት",
    "ቶ",
    "ቸ",
    "ቹ",
    "ቺ",
    "ቻ",
    "ቼ",
    "ች",
    "ቾ",
    "ኀ",
    "ኁ",
    "ኂ",
    "ኃ",
    "ኄ",
    "ኅ",
    "ኆ",
    "ነ",
    "ኑ",
    "ኒ",
    "ና",
    "ኔ",
    "ን",
    "ኖ",
    "Ñ",
    "ኘ",
    "ኙ",
    "ኚ",
    "ኛ",
    "ኜ",
    "ኝ",
    "ኞ",
    "አ",
    "ኡ",
    "ኢ",
    "ኣ",
    "ኤ",
    "እ",
    "ኦ",
    "ከ",
    "ኩ",
    "ኪ",
    "ካ",
    "ኬ",
    "ክ",
    "ኮ",
    "*",
    "ኸ",
    "ኹ",
    "ኺ",
    "ኻ",
    "ኼ",
    "ኽ",
    "ኾ",
    "ወ",
    "ዉ",
    "ዊ",
    "ዋ",
    "ዌ",
    "ው",
    "ዎ",
    "ዐ",
    "ዑ",
    "ዒ",
    "ዓ",
    "ዔ",
    "ዕ",
    "ዖ",
    "ዘ",
    "ዙ",
    "ዚ",
    "ዛ",
    "ዜ",
    "ዝ",
    "ዞ",
    "ዠ",
    "ዡ",
    "ዢ",
    "ዣ",
    "ዤ",
    "ዥ",
    "ዦ",
    "የ",
    "ዩ",
    "ዪ",
    "ያ",
    "ዬ",
    "ይ",
    "ዮ",
    "ደ",
    "ዱ",
    "ዲ",
    "ዳ",
    "ዴ",
    "ድ",
    "ዶ",
    "ጀ",
    "ጁ",
    "ጂ",
    "ጃ",
    "ጄ",
    "ጅ",
    "ጆ",
    "ገ",
    "ጉ",
    "ጊ",
    "ጋ",
    "ጌ",
    "ግ",
    "ጎ",
    "ጠ",
    "ጡ",
    "ጢ",
    "ጣ",
    "ጤ",
    "ጥ",
    "ጦ",
    "ጨ",
    "ጩ",
    "ጪ",
    "ጫ",
    "ጬ",
    "ጭ",
    "ጮ",
    "ጰ",
    "ጱ",
    "ጲ",
    "ጳ",
    "ጴ",
    "ጵ",
    "ጶ",
    "ጸ",
    "ጹ",
    "ጺ",
    "ጻ",
    "ጼ",
    "ጽ",
    "ጾ",
    "ፀ",
    "ፁ",
    "ፂ",
    "ፃ",
    "ፄ",
    "ፅ",
    "ፆ",
    "ፈ",
    "ፉ",
    "ፊ",
    "ፋ",
    "ፌ",
    "ፍ",
    "ፎ",
    "ፐ",
    "ፑ",
    "ፒ",
    "ፓ",
    "ፔ",
    "ፕ",
    "ፖ",
  ];

  shuffelLetters() {
    const letters = this.amhLetters;
    const shuffeledLetters = [];
    const endLetters = [];
    for (let i = 0; i <= letters.length - 1; i++) {
      if (i <= this.shuffel) {
        endLetters.push(letters[i]);
        continue;
      }
      shuffeledLetters.push(letters[i]);
    }
    shuffeledLetters.push(...endLetters);
    return shuffeledLetters;
  }

  get enc() {
    const amhLetters = this.amhLetters;
    let shuffeledLetters = this.shuffelLetters();
    const plainText = this.string.split("");

    const encodedStr = [];
    for (let i = 0; i <= plainText.length - 1; i++) {
      for (let z = 0; z <= amhLetters.length - 1; z++) {
        if (plainText[i] === " ") {
          encodedStr.push(" ");
          continue;
        }
        if (plainText[i] === amhLetters[z]) {
          encodedStr.push(shuffeledLetters[z]);
          continue;
        }
      }
    }
    return encodedStr.join("").split(" ").filter(word => word != "").join(" ");
  }

  get dec() {
    const amhLetters = this.amhLetters;
    let shuffeledLetters = this.shuffelLetters();
    const plainText = this.string.split("");

    const decodedStr = [];

    for (let charIndex = 0; charIndex <= plainText.length - 1; charIndex++) {
      if (plainText[charIndex] === " ") {
        decodedStr.push(plainText[charIndex]);
        continue;
      }

      for (let i = 0; i <= shuffeledLetters.length - 1; i++) {
        if (shuffeledLetters[i] === plainText[charIndex]) {
          decodedStr.push(amhLetters[i]);
        }
      }
    }

    return decodedStr.join("")
  }
}
