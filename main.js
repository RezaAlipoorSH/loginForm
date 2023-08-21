const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "please enter a valid Email";
        ifSendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "please enter a correct password";
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "your password is too short & Weak";
        ifSendData = false;
    }


    if (ifSendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        });
        const Headers = {
            "Content-Type": "application/json"
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: Headers,
        })
            .then(Response => {
                if (Response.ok) {
                    signinMsg.innerText = "You Signed in Successfully"
                }
            })
    }
}