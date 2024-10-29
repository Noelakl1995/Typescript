var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["Editor"] = 2] = "Editor";
    UserStatus[UserStatus["User"] = 3] = "User";
})(UserStatus || (UserStatus = {}));
function checkStatus(status) {
    switch (status) {
        case UserStatus.Admin:
            console.log('é Admin');
            break;
        case UserStatus.Editor:
            console.log('é Editor');
            break;
        case UserStatus.User:
            console.log('é User');
            break;
    }
}
checkStatus(2);
var myname;
myname = 'Elino';
function person(name, age) {
    console.log(name, age);
}
person('Alexandre', 27);
