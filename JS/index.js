Vue.directive('focus',
    function (el) {
        el.focus();
    });

Vue.component("tipBody", {
    template: "#tipBody",
    props: {
        display: Boolean,
        formData: Object,
    }
})

var app = new Vue({
    el: "#app",
    data: {
        //数据库中共有多少学生信息
        studentNum: 0,
        //页面上最多有多少个学生
        pagesMax: 0,
        //当前渲染在页面上的页码
        pagesNum: [],
        //当前选中的页数
        checkPageIndex: 1,
        //学生信息
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
            //组件显示后，获取点击的那一行的数据并显示到表单中
            upDateTip.display = true;
            upDateTip.formData = Object.assign({}, this.students[event.target.parentNode.attributes.index.nodeValue]);
        },
        load(pagesIndex) {
            //根据页码从后端获取学生数据
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
        //页面加载完成后默认加载第一页数据
        this.load(1);
    },
})

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
            //判断是否完整填写数据
            for (const key in this.formData) {
                if (this.formData[key] === "") {
                    alert('请完整填写数据');
                    return;
                }
            }
            //显示加载提示
            loading.display = true;
            axios.post("./PHP/add.php", this.formData).then(
                function (response) {
                    loading.display = false;
                    //清空表格
                    for (const key in addTip.formData) {
                        addTip.formData[key] = "";
                    }
                    alert(response.data);
                    //学生信息添加完成后进行局部刷新
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
            loading.display = true;
            axios.post("./PHP/update.php", this.formData).then(
                function (response) {
                    loading.display = false;
                    alert(response.data);
                    app.load(app.checkPageIndex);
                }
            )
        }
    }
})

var loading = new Vue({
    el: "#loading",
    data: {
        display: false
    }
})