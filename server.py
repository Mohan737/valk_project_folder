from flask import Flask, render_template, request
import razorpay
import json
import shortuuid

app = Flask(__name__)
key_id, key_secret = "rzp_live_4JqtHb0zZsji0V", "jPfuK3OndzZdgRFuI3Sx01VB"     #Key-ID & Key-Secret generated from the Razorpay Dashboard
razorpay_client = razorpay.Client(auth=(key_id, key_secret))


# amount = 499  ## Change this value to required value while testing


@app.route('/')
def app_create():
    return render_template('homepage.html')
    
@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)


#------------collecting order amount from html page-------------
# @app.route('/checkout', methods=['POST'])
# def design_cost():
# 	if request.method == 'POST':
# 		req = request.form
# 		global amount
# 		amount = req.get("od_amount")
# 		# print(f"###############------------{amount}--------------################")
# 		return render_template("/checkout.html")


# -----------for collecting order id from razorpay api------------
@app.route('/payment', methods=['POST'])
def order_id(): 
	# global amount
	# print(f"-------ORDER ID FUCNTION--------------------{amount}----------------------------------")
	# print(type(amount)) ## here the type of varibale is string, so needs conversion into int
	if request.method == 'POST':
		# --------------collecting order amount from checkout page-------
	    req = request.form
	    global amount
	    amount = req.get("od_amount")
	    # print(f"###############------------{amount}--------------################")
	    DATA = {
	        'amount': int(amount)*100,  ## this is done as the api considerd sub-units while making payment. Which means 49900 paise instead of 499rs
	        'currency': 'INR',
	        'receipt': f"receipt_{shortuuid.uuid()}", ## for generating random unique number for reciept-id
	        'payment_capture': 1,
	    }
	    order_detail = razorpay_client.order.create(data=DATA)   ## recieves order response from the api for the given DATA 
	    order_id = order_detail["id"]  ## storing order_id in a variable 
	    order_amount = order_detail["amount"]  ## storing order_amount in a variable  
	    # with open('order_database.txt', 'a') as o_db:  ## for storing the order response from the api into a file
	    #     json.dump(order_detail, o_db, indent=0)  ## since response is in json format, this is used for write the json data in the file
	    return render_template("/payment.html", order_detail = order_detail, key_id=key_id)  ## redirecting to the payment page with the order-details and the key-id
	    # return json.dumps(order_detail)
# -----------End of collecting order id from razorpay api-----------


# -----------for collecting payment successfull response from razorpay api------------
@app.route('/thankyou', methods=['POST'])
def app_charge():
	global amount 
	if request.method == 'POST':
	    payment_success_detail = request.form  ## recieves payment successful response from the api
	    payment_id = payment_success_detail['razorpay_payment_id']  ## storing payment_id in a variable 
	    payment_detail = razorpay_client.payment.fetch(payment_id)  ## storing detailed payment info in a variable 
	    pay_order_id = payment_detail["order_id"]
	    # with open('payment_success_database.txt', 'a') as p_s_db:   ## for storing the payment successful response from the api into a file
	    # 	json.dump(payment_success_detail, p_s_db, indent=0)
	    # with open('payment_detail_database.txt', 'a') as p_db:		## for storing the detailed payment response from the api into a file
	    # 	json.dump(payment_detail, p_db, indent=0)
	    return render_template("/thankyou.html", amount = amount, pay_order_id=pay_order_id,payment_id=payment_id)  ## redirecting to the thankyou page
# -----------End of  collecting payment successfull response from razorpay api------------


if __name__ == '__main__':
	app.run()




