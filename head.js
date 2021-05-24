/**
 * パスワードの素となる文字列を返します
 * @returns {string} パスワードの素
 */
function createPasswordMaterial() {
    var material = ""; // パスワードの素

    // パスワードに使うかもしれない文字
    var lowerCase = "abcdedghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEDGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var mark = "!#$%&-=^~@+*:;?.";

    var ambiguous = "lIwWO0:;"; // 曖昧さ回避で除く文字

    // パスワードの素を作る際に使う情報
    var useAlphabet = document.getElementById("useAlphabet").checked;
    var useUpperCase = document.getElementById("useUpperCase").checked;
    var useLowerCase = document.getElementById("useLowerCase").checked;
    var useNumber = document.getElementById("useNumber").checked;
    var useMark = document.getElementById("useMark").checked;
    var useAvoidanceAmbiguous = document.getElementById("useAvoidanceAmbiguous").checked;

    // 使用する文字が未選択だったら選択を促す
    if (!useAlphabet && !useNumber && !useMark) {
        alert("使用する文字を選択してください。");
        return;
    }

    // アルファベット
    if (useAlphabet) {
        if (useUpperCase) {
            material += upperCase;
        }

        if (useLowerCase) {
            material += lowerCase;
        }

        if (!useUpperCase && !useLowerCase) {
            alert("アルファベットの大文字か小文字を有効にしてください。");
            return;
        }
    }

    // 数字
    if (useNumber) {
        material += number;
    }

    // 記号
    if (useMark) {
        var markTypeToUse = document.getElementById("markTypeToUse").value;

        if (markTypeToUse == "") {
            material += mark;
        } else if (!(/[0-9]|[a-z]|[A-Z]/.test(markTypeToUse))) {
            material += markTypeToUse;
        } else {
            alert("記号以外の文字は指定できません。");
            return;
        }
    }

    // 曖昧さ回避
    if (useAvoidanceAmbiguous) {
        var regexp = new RegExp("[" + ambiguous + "]", "g");
        material = material.replace(regexp, "");
    }

    // パスワードの素を返す
    return material;
}

/**
 * パスワードの素となる文字列をシャッフルします
 * @param {string} chars パスワードの素となる文字列
 * @returns {string} シャッフルされたchars
 */
function shuffleChars(chars) {
    if (chars == void 0) return;

    let _chars = [], destination = 0, temp = '', finish = "";

    // 文字を独立させる
    for (let i = 0; i < chars.length; i++) {
        _chars.push(chars.charAt(i));
    }
    // シャッフル
    for (let i = 0; i < chars.length; i++) {
        destination = Math.floor(Math.random() * chars.length);
        temp = _chars[i];
        _chars[i] = _chars[destination];
        _chars[destination] = temp;
    }
    // 配列を文字列に戻す
    for (let i = 0; i < _chars.length; i++) {
        finish += _chars[i];
    }

    return finish;
}

/**
 * パスワードを作成します
 * @return {string} 作成したパスワードを返す
 */
function createPassword() {
    var password = ""; // パスワードを格納する変数
    var material = shuffleChars(createPasswordMaterial()); // パスワードに使う文字
    var length = document.getElementById("passwordLengthSlide").value; // パスワードの長さ

    if (material == void 0) return;

    // パスワードを作る
    for(var i = 0; i < length; i++) {
        var position = Math.random() * material.length;
        password += material.charAt(position);
    }

    // 作成したパスワードを返す
    return password;
}

/**
 * パスワードを#passwordへセットします
 */
function setPassword() {
    var password = createPassword();

    if (!(password == void 0)) {
        document.getElementById('password').value = password;
    }
}
