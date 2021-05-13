export const validator = (props) => {
  let error = {};
  const domElement = {};
  const domNewElement = {};

  props.map((item, index) => {
    error = {};
    if (!item.value && item.rule.includes("mandatory")) {
      error[index] = `please enter ${item.fieldname}`;
    } else {
      error[index] = "";
    }
    if (
      (item.value &&
        item.value.length &&
        item.rule.some((a) => a.includes("min-"))) ||
      (item.value &&
        item.value.length &&
        item.rule.some((a) => a.includes("max-")))
    ) {
      const minId = item.rule.findIndex((t) => t.toString().includes("min-"));
      const maxId = item.rule.findIndex((t) => t.toString().includes("max-"));
      const minNumber = item.rule[minId].split("min-")[1];
      const maxNumber = item.rule[maxId].split("max-")[1];
      if (item.value.length < minNumber) {
        error[
          index
        ] = `${item.fieldname} must contain atlease ${minNumber} characters.`;
      } else if (item.value.length > maxNumber) {
        error[
          index
        ] = `${item.fieldname} can only have a maximum of ${maxNumber} characters.`;
      } else {
        error[index] = "";
      }
    }
    if (item.value && item.rule.includes("valid-email")) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const valid = emailPattern.test(item.value);
      if (!valid) {
        error[index] = `Please enter a valid ${item.fieldname}.`;
      } else {
        error[index] = "";
      }
    }
    if (item.value && item.rule.includes("valid-name")) {
      var namepattern = /^[a-z]([-'.]?[a-z])+$/;
      const valid = namepattern.test(item.value);
      if (!valid) {
        error[index] = `Please enter a valid ${item.fieldname}.`;
      } else {
        error[index] = "";
      }
    }
    if (item.value && item.rule.includes("match-passwords")) {
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirm-password");
      if (password !== confirmPassword) {
        error[index] = "Passwords does not match";
      } else {
        error[index] = "";
      }
    }

    domElement[index] = `id` + index;
    domNewElement[index] = "newNode" + index;
    domElement[index] = document.getElementById(item.fieldname);
    domNewElement[index] = document.createElement("div");
    domNewElement[index].id = `error-${index}`;
    domNewElement[index].innerHTML = error[index];
    domNewElement[index].style.color = "red";
    domNewElement[index].style.marginTop = "2px";
    domNewElement[index].style.marginBottom = "8px";
    if (document.getElementById(`error-${index}`)) {
      document.getElementById(`error-${index}`).remove();
    }
    domElement[index].after(domNewElement[index]);
  });
  
  if (Object.values(error)[0].length > 1) {
    return false;
  } else {
    return true;
  }
};
