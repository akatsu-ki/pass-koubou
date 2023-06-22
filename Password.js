class Password {
    constructor() {
        this.password = "";

        let input = document.createElement("input");

        input.setAttribute("class", "password");
        input.setAttribute("readonly", "");

        this.node = input;
    }

    setPassword(password) {
        this.password = password;
    }
    
    create() {
        //
    }

    copy() {
        //
    }

    getNode() {
        return this.node;
    }
}