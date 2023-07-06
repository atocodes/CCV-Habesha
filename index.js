const cca = new AmhCeasorCipher();

const result = document.getElementById("result");
const textInput = document.getElementById("inptext");
const inputShuffel = document.getElementById("shuffel");
const encode_div = document.getElementById("encode");
const decode_div = document.getElementById("decode");
const incShuffelValue = document.getElementById("incShuffelValue");
const shuffel = document.getElementById("shuffel");
const decShuffelValue = document.getElementById("decShuffelValue");
const copy_ico = document.getElementById("copy");
function encode() {
  cca.string = textInput.value != "" ? textInput.value : cca.string;
  cca.shuffel =
    inputShuffel.textContent != ""
      ? parseInt(inputShuffel.textContent)
      : cca.shuffel;
  result.textContent = cca.enc;
}

function decode() {
  cca.string = textInput.value != "" ? textInput.value : cca.string;
  cca.shuffel =
    inputShuffel.textContent != ""
      ? parseInt(inputShuffel.textContent)
      : cca.shuffel;
  result.textContent = cca.dec;
}

function copy_to_clipboard() {
  const content = result.textContent;
  navigator.clipboard
    .writeText(content)
    .then((success) => alert("Copied To Clipboard"))
    .catch((err) => alert(err.message));
}

function main() {
  shuffel.textContent = cca.shuffel;
  textInput.textContent = cca.string;
  result.textContent = cca.enc;
  encode_div.onclick = encode;
  decode_div.onclick = decode;

  copy_ico.onclick = () => {
    navigator.clipboard.writeText(result.textContent);
    alert("Text Copied to Clipboard");
  };

  incShuffelValue.onclick = () => {
    if (parseInt(cca.shuffel) >= cca.amhLetters.length) return;
    cca.shuffel += 1;
    shuffel.textContent = cca.shuffel;
  };

  decShuffelValue.onclick = () => {
    if (cca.shuffel === 1) return;
    cca.shuffel -= 1;
    shuffel.textContent = cca.shuffel;
  };
}

main();
