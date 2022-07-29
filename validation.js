
var checkValidation = function () {
    var valid = true;
    //Kiểm tra rổng
    valid = kiemTraRong('firstName', 'error_firstName') & kiemTraRong('lastName', 'error_lastName') & kiemTraRong('password', 'error_password');
    valid &= kiemTraRong('confirmPassword', 'error_confirmPassword') & kiemTraRong('email', 'error_email');
    //Kiểm tra tất cả là chuỗi
    valid &= kiemTraTatCaLaChu('#firstName', '#error_firstName_all_leter') & kiemTraTatCaLaChu('#lastName', '#error_lastName_all_leter');
    //Kiểm tra tất cả là số
    valid &= kiemTraTatCaLaSo('#phone', '#error_phone');
    valid &= kiemTraEmail('#email', '#error_email');
    valid &= kiemTraDoDai('#password', '#error_password_min_max_length');
    valid &= kiemTraGiaTri('#password', '#error_password_min_max_value', 20, 10);
    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationFirstName = function () {
    valid = kiemTraTatCaLaChu('#firstName', '#error_firstName_all_leter') & kiemTraRong('firstName', 'error_firstName');

    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationLastName = function () {
    valid = kiemTraTatCaLaChu('#lastName', '#error_lastName_all_leter') & kiemTraRong('lastName', 'error_lastName');

    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationPassword = function () {
    valid = kiemTraDoDai('#password', '#error_password_min_max_length') & kiemTraGiaTri('#password', '#error_password_min_max_value', 20, 10) & kiemTraRong('password', 'error_password');

    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationComfirmPassword = function () {
    valid = kiemTraRong('confirmPassword', 'error_confirmPassword') & kiemTraRong('confirmPassword', 'error_confirmPassword')
    & kiemTraGiongNhau('password','confirmPassword','error_confirmPassword');

    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationPhone = function () {
    valid = kiemTraTatCaLaSo('#phone', '#error_phone') & kiemTraRong('#phone', '#error_phone');

    if (!valid) {
        return false;
    }
    return true;
}
var checkValidationEmail = function () {
    valid = kiemTraRong('email', 'error_email') & kiemTraEmail('#email', '#error_email');

    if (!valid) {
        return false;
    }
    return true;
}

var kiemTraRong = function (idValue, idError) {

    var inputText = document.getElementById(idValue);

    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = inputText.name + ' không được bỏ trống !';
        document.getElementById(idError).style.display = 'block';
        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }

}

var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
    //Lấy giá trị người dùng nhập vào từ selector
    var inputText = document.querySelector(selectorValue);
    var regexChu = /^[A-Za-z ]+$/;
    if (regexChu.test(inputText.value)) {
        //Hợp lệ 
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        //Không hợp lệ
        document.querySelector(selectorError).innerHTML = inputText.name + ' phải là chữ !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}


var kiemTraTatCaLaSo = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(inputText.value)) {
        //Hợp lệ 
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' yêu cầu nhập số !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}


var kiemTraEmail = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' không hợp lệ !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}



var kiemTraDoDai = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

var kiemTraGiaTri = function (selectorValue, selectorError, maxValue, minValue) {
    var inputText = document.querySelector(selectorValue);
    if (inputText.value > Number(maxValue) || inputText.value < Number(minValue)) {
        document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + minValue + ' đến ' + maxValue + ' !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}

var kiemTraGiongNhau = function (selectorValue, selectorValue2,selectorError) {
var pass1 = document.getElementById(selectorValue);
    var pass2 = document.getElementById(selectorValue2);
    if (pass1.value === pass2.value) {
        document.getElementById(selectorError).innerHTML = '';
        document.getElementById(selectorError).style.display = 'none';
        return true;
    } else {
        document.getElementById(selectorError).innerHTML = pass1.name +  ' không giống!';
        document.getElementById(selectorError).style.display = 'block';
        return false;
    }


}

document.getElementById('firstName').onblur = checkValidationFirstName;
document.getElementById('lastName').onblur = checkValidationLastName;
document.getElementById('password').onblur = checkValidationPassword;
document.getElementById('confirmPassword').onblur = checkValidationComfirmPassword;
document.getElementById('phone').onblur = checkValidationPhone;
document.getElementById('email').onblur = checkValidationEmail;

document.getElementById('btnDangKy').onclick = checkValidation;

// HIDEN/SHOW PASSWORD 

document.querySelector('#eye').onclick = function (){
    var type = document.querySelector('#password').type === 'password' ? 'text' : 'password';
    document.querySelector('#password').type = type;
    const iconeye = document.querySelector('#password').type === 'password' ? 'fa fa-eye' : 'fa fa-eye-slash';
    document.querySelector('#eye').className = iconeye;
    
}



// //Hàm kiểm tra trường dữ liệu chứa các loại ký tự khác nhau
// function containsCharacters(field, code) {
//     let regEx;
//     switch (code) {
//         case 1:
//             // Kiểm tra chứa kí tự
//             regEx = /(?=.*[a-zA-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải chứa ít nhất 1 ký tự');
//         case 2:
//             // Kí tự và số
//             regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải chứa ít nhất 1 ký tự và 1 số');
//         case 3:
//             // IN HOA, thường và số & Kí tự
//             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải có ít nhất 1 ký tự IN HOA, một ký tự thường và một số');
//         case 4:
//             // chữ hoa, thường, số và kí tự đặc biệt
//             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
//             return matchWithRegEx(regEx, field, 'Mật khẩu phải có ít nhất 1 kí tự HOA, kí tự thường, một số và kí tự đặc biệt');
//         case 5:
//             // Kiểm tra email
//             regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return matchWithRegEx(regEx, field, 'Email phải hợp lệ');
//         default:
//             return false;
//     }
// }
