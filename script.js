 function checkPasswordStrength() {
        const password = document.getElementById("password").value;
        const bar = document.getElementById("password-strength-bar");
        const text = document.getElementById("password-strength-text");
        let strength = 0;
        if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
          strength += 1;
        }
        if (password.match(/[~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/)) {
          strength += 1;
        }
        if (password.length > 7) {
          strength += 1;
        }
        switch (strength) {
          case 0:
            bar.className = "";
            text.innerHTML = "";
            break;
          case 1:
            bar.className = "weak";
            text.className = "weak";
            text.innerHTML = "Weak password";
            break;
          case 2:
            bar.className = "medium";
            text.className = "medium";
            text.innerHTML = "Medium password";
            break;
          case 3:
            bar.className = "strong";
            text.className = "strong";
            text.innerHTML = "Strong password";
            break;
        }
        bar.style.width = strength * 33.33 + "%";
      }