// GUIのイベントを設定

// 作成ボタン
document.getElementById("createPasswordButton").addEventListener("click", function() {
    setPassword();
});

// コピーボタン
function copyPassword(text) {
    if(text == "") {
        alert('パスワードがありません。');
        return;
    }

    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('corrected');
        alert('パスワードをコピーしました！');
    })
    .catch(err => {
        console.error('failed');
    });
}
document.getElementById("copyPasswordButton").addEventListener("click", () => {
    let password = document.getElementById('password').value;
    copyPassword(password);
});

// スライドバーと長さのノード
var passwordLengthSlideBar = document.getElementById("passwordLengthSlide");
var passwordLengthDirect = document.getElementById("passwordLengthInput");

passwordLengthSlideBar.addEventListener("input", function() {
    passwordLengthDirect.value = passwordLengthSlideBar.value;
});

passwordLengthDirect.addEventListener("input", function() {
    if (passwordLengthDirect.value > 50) {
        window.alert("50文字以内に設定してください。");
        passwordLengthDirect.value = 50;
    }

    passwordLengthSlideBar.value = passwordLengthDirect.value;
});

passwordLengthDirect.addEventListener("blur", function() {
        if (passwordLengthDirect.value == "") {
            passwordLengthDirect.value = passwordLengthSlideBar.value = 10;
    }
});

// オプションのアルファベットからチェックを外したら大/小文字のチェックも外すイベント
var checkboxAlphabet = document.getElementById("useAlphabet");
var checkboxUpperCase = document.getElementById("useUpperCase");
var checkboxLowerCase = document.getElementById("useLowerCase");

checkboxAlphabet.addEventListener("change", function() {
    if (!checkboxAlphabet.checked) {
        checkboxUpperCase.checked = checkboxLowerCase.checked = false;
        checkboxUpperCase.setAttribute("disabled", "disabled");
        checkboxLowerCase.setAttribute("disabled", "disabled");
    } else {
        checkboxUpperCase.removeAttribute("disabled", "");
        checkboxLowerCase.removeAttribute("disabled", "");
    }
});

// 記号からチェックを外したら使用する記号のノードを読み取り専用にするイベントを設定
var markCheckbox = document.getElementById("useMark");
var markTypeToUseNode = document.getElementById("markTypeToUse");

markCheckbox.addEventListener("change", function() {
    if (!markCheckbox.checked) {
        markTypeToUseNode.setAttribute("readonly", "readonly");
    } else {
        markTypeToUseNode.removeAttribute("readonly");
    }
});