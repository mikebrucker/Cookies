let choco = Cookies.get('chocChip'),
peanut = Cookies.get('peanutButter'),
sugar = Cookies.get('sugar'),
numberOfOrders = Cookies.get('orderNumber');

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
        Cookies.set('peanutButter', 0);
        p = 0;
    }
}

function getSugar() {
    if (sugar) {
        s = (parseInt(sugar));
    } else {
        Cookies.set('sugar', 0);
        s = 0;
    }
}

function getOrderNumber() {
    if (numberOfOrders) {
        orderNumber = (parseInt(numberOfOrders));
    } else {
        Cookies.set('orderNumber', 0);
        orderNumber = 0;
    }
}

function order() {
    $('#total').html("<span class='bigtext'>" + c + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + p + "</span> Peanut Butter Cookies, <span class='bigtext'>" + s + "</span> Sugar Cookies.");
}

function clearCookies() {
    Cookies.set('chocChip', 0);
    Cookies.set('peanutButter', 0);
    Cookies.set('sugar', 0);
    getCookies();
}

function getCookies() {
    choco = Cookies.get('chocChip');
    peanut = Cookies.get('peanutButter');
    sugar = Cookies.get('sugar');
    numberOfOrders = Cookies.get('orderNumber');
    getChoc();
    getPeanut();
    getSugar();
    getOrderNumber();
    order();
}
getCookies();

$('#choco').click(function() {
    c++;
    Cookies.set('chocChip', c);
    getCookies();
    console.log("Chocolate Chip Cookie: " + parseInt(Cookies.get('chocChip')));
});

$('#peanut').click(function() {
    p++;
    Cookies.set('peanutButter', p);
    getCookies();
    console.log("Peanut Butter Cookie: " + parseInt(Cookies.get('peanutButter')));
});

$('#sugar').click(function() {
    s++;
    Cookies.set('sugar', s);
    getCookies();
    console.log("Sugar Cookie: " + parseInt(Cookies.get('sugar')));
});

$('#total').html("<span class='bigtext'>" + c + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + p + "</span> Peanut Butter Cookies, <span class='bigtext'>" + s + "</span> Sugar Cookies.");

$('#order').click(function() {
    window.open('secondpage.html', '_blank');
    orderNumber++;
    Cookies.set('orderNumber', orderNumber);
    Cookies.set('order' + orderNumber, "Order <span class='bigtext'>#" + orderNumber + "</span>: Chocolate Chip Cookies: <span class='bigtext'>" + parseInt(Cookies.get('chocChip')) + ",</span> Peanut Butter Cookies: <span class='bigtext'>" + parseInt(Cookies.get('peanutButter')) + ",</span> Sugar Cookies: <span class='bigtext'>" + parseInt(Cookies.get('sugar')) + ".</span>");
    setTimeout(function() {getCookies();},50);
})

$('#clear').click(function() {
    clearCookies();
})

$('#myOrders').click(function() {
    window.open('thirdpage.html', '_blank');
})

$(function() {
    $('#modalText').html("<p>Thank you for your order of</p><p><span class='bigtext'>" + parseInt(Cookies.get('chocChip')) + "</span> Chocolate Chip Cookies, <span class='bigtext'>" + parseInt(Cookies.get('peanutButter')) + "</span> Peanut Butter Cookies, and <span class='bigtext'>" + parseInt(Cookies.get('sugar')) + "</span> Sugar Cookies.</p>");
    $('#orderModal').slideDown(1200);
    clearCookies();
})

$(function() {
    for (var i = 1; i < (orderNumber + 1); i++) {
        $('#allOrders').append("<div class='page'>" + Cookies.get('order'+ i) + "</div><div class='block'></div>");
    }
})