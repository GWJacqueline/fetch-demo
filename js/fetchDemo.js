document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJson);
document.getElementById('btn3').addEventListener('click', getWeb);
//请求本地文本数据
function getText() {
    fetch("data/test.txt")
        .then((res) => res.text())
        .then((data) => {
            console.log(data); //变瘦瘦变美美
            document.getElementById("output").innerHTML = data;
        })
        .catch(() => { console.log("获取失败") });
}
//XMLHttpRequest请求本地文本数据
// function getText() {
//     var xml = new XMLHttpRequest;
//     xml.open('GET', 'ES6/test.txt');
//     xml.send();
//     xml.onreadystatechange = function () {
//         if (this.readyState === 4 && xml.status === 200) {
//             document.getElementById("output").innerHTML = xml.responseText;
//         } else {
//             console.log("发生错误：", xmlJson.status);
//         }
//     };
// }
//请求本地json数据
function getJson() {
    fetch("data/test.json")
        .then(res => res.json())
        .then((data) => {
            console.log(data);//(6) [{…}, {…}, {…}, {…}, {…}, {…}]
            let outPut = '';
            data.forEach((x) => {
                outPut += `
                id:${x.id}<br>
                title:${x.title}<br>
                body:${x.body}<br>
                `
            });
            document.getElementById("output").innerHTML = outPut;
        })
        .catch(() => { console.log("获取失败") });
}
//请求网络接口
function getWeb() {
    let weburl = "https://api.github.com/users";
    fetch(weburl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let webData = '';
            data.forEach((x) => {
                webData += `loginName:${x.login}<br>`
            });
            document.getElementById("output").innerHTML = webData;
        })
        .catch(() => {
            console.log("获取失败");
        });
}