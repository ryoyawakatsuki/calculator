var obj = document.getElementById("result");

function edit(ch) {
  if (ch == "00") {
    if (obj.value == "0" || obj.value == "") {
      obj.value = "0";
    } else {
      obj.value += ch;
    }
  } else if (ch == ".") {
    if (obj.value.slice(-1) == ch) return;
    obj.value += ch;
  } else if (ch == "AC") {
    obj.value = "0";
  } else if (ch == "=") {
    obj.value = eval(obj.value);
  } else {
    if (obj.value.slice(-1) == "+" || obj.value.slice(-1) == "-" || obj.value.slice(-1) == "*" || obj.value.slice(-1) == "/" || obj.value.slice(-1) == ".") {
      if (ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == ".") {
        obj.value = obj.value.slice(0,-1) + ch;
      } else {
        obj.value += ch;
      }
    } else if (obj.value == "0") {
      obj.value = ch;
    } else {
      obj.value += ch;
    }
  }
}