function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var country = document.getElementById("country").value;
    var regex;
    switch (country) {
    case "US":
      regex = /^\d{10}$/;
      break;
    case "CA":
      regex = /^\d{10}$/;
      break;
    case "UK":
      regex = /^\d{11}$/;
      break;
    case "FR":
      regex = /^\d{10}$/;
      break;
    case "DE":
      regex = /^\d{10}$/;
      break;
    case "AU":
      regex = /^\d{10}$/;
      break;
    case "IN":
      regex = /^\d{10}$/;
      break;
    case "CN":
      regex = /^\d{11}$/;
      break;
    case "JP":
      regex = /^\d{10}$/;
      break;
    default:
      regex = null;
    }
    if (regex !== null && regex.test(phoneNumber)) {
      document.getElementById("result").innerHTML = "Valid phone number";
    } else {
      document.getElementById("result").innerHTML = "Invalid phone number";
    }
  }
  