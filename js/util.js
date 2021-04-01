/******************************************************
 *                UTILITY FUNCTIONS                   *
 *****************************************************/

function checkEmail(txt){
    if(txt.length >= 7){
        return true;
    }
    return false;
}

function checkPassword(txt){
    if(txt.length >= 6){
        return true;
    }
    return false;
}

function getPageName(){
    var path = window.location.pathname;
    return path.split('/').slice(-1).pop();
}

function signoutAction(){
    if (loggedUser != null) {
        loggedUser.signOut();
        sessionStorage.clear();
        window.location.replace('/index.html');	  
    }
}

// Selector unitario
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

// Selector de todos
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}