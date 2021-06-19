var app = new Vue({
    el: "#app",
    data: {
        loginData: {
            userName: "",
            passWord: ""
        }
    },
    methods: {
        login() {
            if (this.loginData.userName !== "" && this.loginData.passWord !== "") {
                axios.post("./PHP/login.php", this.loginData).then(
                    function (response) {
                        console.log(response.data);
                        if (response.data == "yes") {
                            window.location.href = "./studentManage.html"
                        }
                    }
                )
            } else {
                alert('请填写账号与密码');
            }
        }
    },
})