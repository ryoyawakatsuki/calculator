var obj = document.getElementById("result");

function edit(ch) {
  if (ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == ".") {
    if (obj.value.slice(-1) == ch) return;
    obj.value += ch;
  } else if (ch == "00") {
    if (obj.value == "0" || obj.value == "") {
      obj.value = "0";
    } else {
      obj.value += ch;
    }
  } else if (ch == "AC") {
    obj.value = "0";
  } else if (ch == "=") {
    obj.value = eval(obj.value);
  } else {
    if (obj.value == "0") {
      obj.value = ch;
    } else {
      obj.value += ch;
    }
  }
}