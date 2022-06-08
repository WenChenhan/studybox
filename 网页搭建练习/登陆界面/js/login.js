


//函数功能：点击将登录页面升起，同时将提示内容关闭,提示注册内容展示
function goUp() {
    var onli = document.getElementById("login-dl");
    onli.style.cssText = 'width: 350px; height: 450px; position: absolute;bottom: 0px;background - color: white;transition: all 0.3s; '
    onli.classList.remove('shou');
    var disp = document.getElementById("login-dl-bot");
    // disp.style.cssText = 'display: none; font-size: 18px; display: flex;justify-content: space-between;align-items: center;width: 160px;margin: 0 auto;margin-top: 40px;transition: all 0.3s;'
    disp.style.cssText = 'font-size: 18px; display: flex;justify-content: space-between;align-items: center;width: 160px;margin: 0 auto;margin-top: 40px;transition: all 0.3s;display: none; '
    var show = document.getElementById("login-dl-top");
    show.style.cssText = 'color: white;position: absolute;left: 50%;transform: translate(-50%,0);top: 20px;font-size: 18px;display: flex;justify-content: center;align-items: center;width: 160px;transition: all 0.3s;width: 100%;height: 50px;'
    show.classList.add('shou');
}

function goDown() {
    var onli = document.getElementById("login-dl");
    onli.classList.add('shou');
    onli.style.cssText = 'width: 350px; height: 70px; position: absolute;bottom: 0px;background - color: white;transition: all 0.3s; '
    var show = document.getElementById("login-dl-top");
    show.classList.remove('shou');
    show.style.cssText = 'color: white;position: absolute;left: 50%;transform: translate(-50%,0);top: -80px;font-size: 18px;display: flex;justify-content: center;align-items: center;width: 160px;transition: all 0.3s;width: 100%;height: 50px;'
    var disp = document.getElementById("login-dl-bot");
    // disp.style.cssText = 'display: none; font-size: 18px; display: flex;justify-content: space-between;align-items: center;width: 160px;margin: 0 auto;margin-top: 40px;transition: all 0.3s;'
    disp.style.cssText = 'font-size: 18px; display: flex;justify-content: space-between;align-items: center;width: 160px;margin: 0 auto;margin-top: 40px;transition: all 0.3s;'
}

var userName = [];
var userPassword = [];

function register() {
    //获取账号的密码
    var un = document.getElementById('userName').value;
    var up = document.getElementById('userPassword').value;

    //差错判定
    if (un == '' || up == '') {
        alert('你输入的账号或密码为空！请检查！')
        return;
    }
    if (userName.includes(un)) {
        alert('账户名已存在！请重新输入！');
        console.log(userName);
        console.log(userPassword);
        return;
    }
    userName.push(un);
    userPassword.push(up);

    alert(`注册成功！你的账号为 ${un} !请登录！`)

    document.getElementById('userName').value = '';
    document.getElementById('userPassword').value = '';

    console.log(userName);
    console.log(userPassword);
    goUp();
}

var countMiss = 3;
var lockUn = [];

function login() {
    var i_n = document.getElementById('inputName').value;
    var i_p = document.getElementById('inputPassword').value;

    if (userName.indexOf(i_n) === -1) {
        alert('未找到用户名！请检查或先注册！');
        document.getElementById('inputName').value = '';
        document.getElementById('inputPassword').value = '';
        return;
    }
    if (lockUn.includes(i_n)) {
        alert('账号已被锁定！联系开发人员解锁！');
        document.getElementById('inputName').value = '';
        document.getElementById('inputPassword').value = '';
        return;
    }
    if (i_p != userPassword[userName.indexOf(i_n)]) {
        countMiss--;
        alert(`密码错误！请重新输入！还剩${countMiss}次机会！`)
        document.getElementById('inputPassword').value = '';
        if (countMiss == 0) {
            alert('次数已用完！账号锁定！联系开发人员解锁！');
            countMiss = 3;
            lockUn.push(i_n);
            return;
        }
        return;
    }
    alert('登录成功，感谢你的使用！')
    document.getElementById('inputName').value = '';
    document.getElementById('inputPassword').value = '';
    //平滑移动到底部
    var chuxian = document.getElementById('welcomebox');
    chuxian.classList.add('chuxian');

    window.scrollTo({
        top:1200,
        left:0,
        behavior:"smooth"
    });

}

function back(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });

    var chuxian = document.getElementById('welcomebox');
    chuxian.classList.remove('chuxian');


}


