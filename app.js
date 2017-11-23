var express = require("express");
var app = express();
var Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

var i = 0
var log="";
var logErr="";
function nifffff(callback) {
   log="Function run"
	i++;
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
       // .end(function(){console.log('success')})
	   .then(function (result) {
            console.log('ok');
i++;
callback(true)
	   })
        .catch(function (error) {
            console.error('Search failed:', error);
			logErr='Search failed:'+ error;
			callback(false)
        });
	
}
//nifffff();
//setInterval(function () {
	//i++;
	//nifffff();8
//}, 30000)
function runTest(callback){
	nifffff(function(res){
		if(res){
			runTest()
			log+="-ok-"+i+"\n"
		}else{
			runTest()
		}
	})
}
runTest()//run app
app.get("/", function (req, res) {
    console.log('logggggggg')
	res.end('APP:' + log+'\n'+'Err:' + logErr+'\n'+)
})

app.listen(process.env.PORT||3000)
