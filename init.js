// GUIのイベントを設定

// 作成ボタン
$("#createPassword").click(() => {
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
/*
document.getElementById("copyPasswordButton").addEventListener("click", () => {
    let password = document.getElementById('password').value;
    copyPassword(password);
});
*/

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

// チェックボックスのラベルをクリックしたらアニメーション用のクラスを付与/除去する
$(".checkbox > input[type = \"checkbox\"").click(function() {
    $(this).parent().toggleClass("checked");
    console.log(this);
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