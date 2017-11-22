var express = require("express");
var app = express();
var Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

app.listen(process.env.PORT||3000)
var i = 0

app.get("/", function (req, res) {
    nifffff();
    console.log('logggggggg')
    res.end('Home:' + i)
})
function nifffff() {
    console.log('in function:')
    nightmare
        .goto('https://darkness.sku.vn/products/bo-chan-goi-van-phong-olivin-totoro')
        .wait('#buy-now')
        .click('#buy-now')
        .wait(3000)
        .wait('#checkout')
        .click('#checkout')

        .wait('#billing_address_full_name')
        .type('#billing_address_full_name', 'auto test')

        .wait('#checkout_user_email')
        .type('#checkout_user_email', 'autotest@sd.asd')


        .wait('#billing_address_phone')
        .type('#billing_address_phone', '0987654321')

        .wait('#billing_address_address1')
        .type('#billing_address_address1', 'ahihi ahihi ahihi')

        .select('#customer_shipping_province', 50)
        // .wait(3000)
        .wait('#customer_shipping_district')
        .select('#customer_shipping_district', 479)
        .wait(1000)
        .click('button.step-footer-continue-btn')

        .wait(2000)
        //.end()
        .then(() => {
            i++
            console.log('ok order')
            nifffff()
        }

        )
        .catch((error) => {
            i++
            nifffff()
            console.error('Search failed:', error);
        });


}
