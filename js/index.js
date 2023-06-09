//获取搜索按钮
const btn = document.querySelector('.label');
//获取下拉框，方便后期判断用户选择的搜索平台
const point = document.querySelector('select');
//获取input框
const texts = document.querySelector('#text');

//将所有平台的搜索关键字端，存入数组
const arr = ['wd', 'q', 'text', 'query', 'w', 'keyword', 'm=Index&a=fenlei&k'];

//搜索按钮被点击以后要做的事情
btn.onclick = function () {
    //获取下拉框用户选中的内容
    const p = point.value;
    //获取输入框中，用户输入放入内容
    const text = texts.value;
    //声明一个空字符串
    let str = '';

    //以下所有的if语句是用来判断下拉框选项中是否包含平台域名关键字的，如果有
    if (p.includes('baidu')) {
        str = '?' + 'wd' + '=' + text;
    }
    else if (p.includes('bing')) {
        str = '?' + 'q' + '=' + text;
    }
    else if (p.includes('juejin')) {
        str = '?' + 'query' + '=' + text;
    }
    else if (p.includes('cnblogs')) {
        str = '?' + 'w' + '=' + text;
    }
    else if (p.includes('jianshu')) {
        str = '?' + 'q' + '=' + text;
    }
    else if (p.includes('csdn')) {
        str = '?' + 'q' + '=' + text;
    }
    else if (p.includes('bilibili')) {
        str = '?' + 'keyword' + '=' + text;
    }
    else if (p.includes('github')) {
        str = '?' + 'q' + '=' + text;
    }
    else {
        str = "";
    }


    //最后我们利用页面跳转，跳转到指定的平台域名+搜索字段，就可以实现了
    window.location.href = p + str;
}

//当用户点击确定（enter）键后，让搜索按钮模拟被点击
document.onkeyup = function (e) {
    if (e.keyCode == 13) {
        btn.click();
    }
}