var app = new Vue({
    el: "#app",
    data: {
        studentNum: 0,
        pagesMax: 0,
        pagesNum: [],
        checkPageIndex: 1,
        students: []
    },
    methods: {
        confirmDel(id) {
            //询问是否要删除？
            if (window.confirm("你真的要删除吗？")) {
                let url = "./PHP/delete.php?id=" + id;
                axios.get(url).then(function (response) {
                    if (response) {
                        alert("删除成功");
                        load(checkPageIndex);
                    } else {
                        alert("删除失败");
                    }
                });
            }
        },
        addTipShow() {
            addTip.display = true;
        },
        upDateTipShow(event) {
            upDateTip.display = true;
            upDateTip.formData = Object.assign({}, this.students[$(event.target).parent().parent().index()]);
        },
        load(pagesIndex) {
            this.checkPageIndex = pagesIndex;
            let url = "./PHP/list.php?page=" + pagesIndex;
            axios.get(url).then(function (response) {
                app.students = response.data.arr;
                app.studentNum = response.data.records;
                app.pagesMax = response.data.pagesize;
                if (app.studentNum / app.pagesMax <= 10 || app.checkPageIndex < 6) {
                    for (let i = 0; i < app.studentNum / app.pagesMax; i++) {
                        app.pagesNum[i] = i + 1;
                    }
                } else if (app.checkPageIndex - 1 < app.studentNum / app.pagesMax - 4) {
                    app.pagesNum[5] = app.checkPageIndex;
                    let start = 0;
                    let end = 6;
                    for (let j = 5; j > 0; j--) {
                        app.pagesNum[start] = app.checkPageIndex - j;
                        start++;
                    }

                    for (let j = 1; j < 5; j++) {
                        app.pagesNum[end] = app.checkPageIndex + j;
                        end++;
                    }

                } else if (app.checkPageIndex > app.studentNum / app.pagesMax - 4) {
                    let start = 0;
                    for (let i = app.studentNum / app.pagesMax - 10; i < app.studentNum / app.pagesMax; i++) {
                        app.pagesNum[start] = i + 1;
                        start++;
                    }
                }
            }).catch(
                function () {
                    alert('数据获取失败');
                }
            )
        },
    },
    created() {
        this.load(1);
    },
})
Vue.directive('focus',
    function (el) {
        el.focus();
    });
var addTip = new Vue({
    el: "#addTip",
    data: {
        display: false,
        formData: {
            name: "",
            sex: "",
            age: "",
            edu: "",
            salary: "",
            bonus: "",
            city: ""
        }
    },
    methods: {
        addTipHide() {
            this.display = false;
        },
        addStudentData() {
            for (const key in this.formData) {
                if (this.formData[key] === "") {
                    alert('请完整填写数据');
                    return;
                }
            }
            axios.post("./PHP/add.php", this.formData).then(
                function (response) {
                    //清空表格
                    for (const key in addTip.formData) {
                        addTip.formData[key] = "";
                    }
                    alert(response.data);
                    app.load(app.checkPageIndex);
                }
            )
        }
    }

})
var upDateTip = new Vue({
    el: "#upDateTip",
    data: {
        display: false,
        formData: {
            id: "",
            name: "",
            sex: "",
            age: "",
            edu: "",
            salary: "",
            bonus: "",
            city: ""
        }
    },
    methods: {
        upDateTipHide() {
            this.display = false;
        },
        upDate() {
            for (const key in this.formData) {
                if (this.formData[key] === "") {
                    alert('请完整填写数据');
                    return;
                }
            }
            axios.post("./PHP/update.php", this.formData).then(
                function (response) {
                    //清空表格
                    for (const key in addTip.formData) {
                        upDateTip.formData[key] = "";
                    }
                    alert(response.data);
                    app.load(app.checkPageIndex);
                }
            )
        }
    }
})