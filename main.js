let choco = Cookies.get('chocChip'),
peanut = Cookies.get('peanutButter'),
sugar = Cookies.get('sugar');

function getChoc() {
    if (choco) {
        c = (parseInt(choco));
    } else {
        Cookies.set('chocChip', 0);
        c = 0;
    }
}
function getPeanut() {
    if (peanut) {
        p = (parseInt(peanut));
    } else {
        Cookies.set('peanutButter', 0)
        p = 0;
    }
}
function getSugar() {
    if (sugar) {
        s = (parseInt(sugar));
    } else {
        Cookies.set('sugar', 0)
        s = 0;
    }
}

function getCookies() {
    choco = Cookies.get('chocChip');
    peanut = Cookies.get('peanutButter');
    sugar = Cookies.get('sugar');
    getChoc();
    getPeanut();
    getSugar();
}
getCookies();

$('#choco').click(function() {
    getCookies();
    c++;
    Cookies.set('chocChip', c);
    order();
    console.log("Chocolate Chip Cookie: " + parseInt(Cookies.get('chocChip')));
});

$('#peanut').click(function() {
    getCookies();
    p++;
    Cookies.set('peanutButter', p);
    order();
    console.log("Peanut Butter Cookie: " + parseInt(Cookies.get('peanutButter')));
});

$('#sugar').click(function() {
    getCookies();
    s++;
    Cookies.set('sugar', s);
    order(); 
    console.log("Sugar Cookie: " + parseInt(Cookies.get('sugar')));
});

function order() {
    $('#total').html("<span class='bigtext'>" + c + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + p + "</span> Peanut Butter Cookies, <span class='bigtext'>" + s + "</span> Sugar Cookies.");
}

$('#total').html("<span class='bigtext'>" + c + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + p + "</span> Peanut Butter Cookies, <span class='bigtext'>" + s + "</span> Sugar Cookies.");

$('#order').click(function() {
    window.open('secondpage.html', '_blank');
})

$('#clear').click(function(){
    Cookies.set('chocChip', 0);
    Cookies.set('peanutButter', 0);
    Cookies.set('sugar', 0);
    getCookies();
    order();
})

$(function(){
    $('#modalText').html("<p>Thank you for your order of</p><p><span class='bigtext'>" + parseInt(Cookies.get('chocChip')) + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + parseInt(Cookies.get('peanutButter')) + "</span> Peanut Butter Cookies, and <span class='bigtext'>" + parseInt(Cookies.get('sugar')) + "</span> Sugar Cookies.</p>");
    $('#orderModal').slideDown(1200);
})