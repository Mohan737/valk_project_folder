function submit() {

        var t_email = document.getElementById('email').value;
        var si = document.getElementById('size').value;
        console.log(si)
        var b_con = "the designs and cost: " + cost.toString() + "size: " + si.toString();
        Email.send({ //-----Email to Valkyre Designs team mail-----
            //SecureToken: "be037cb9-75d6-4542-99ab-e50cd0b34f4c",
            Host: "smtp.gmail.com",
            Username : "mjb.projects737@gmail.com",
            Password : "ivvxqdjgcmhfcbzn", // using secure code
                        //             Host: "smtp.elasticemail.com",
                        // Username: "wwwanandsuresh@gmail.com",
                        // Password: "A5BDC18689165F4E2DA81ADF785EF6784A75",
            //To: 'arindam_bora@hotmail.com',
            To: 'mbhandary737@gmail.com',
            From: "mjb.projects737@gmail.com",
            Subject: "Ordered_designs owner email notification",
            Body: b_con,
            Attachments: [{
                name: "back.png",
                data: ncw2.toDataURL('image/png')
            }, {
                name: "front.png",
                data: ncw1.toDataURL('image/png')
            }]
        }).then(
            //message => alert(message)
        );
        Email.send({ // -----Email to customer as a notification-----
            //SecureToken: "be037cb9-75d6-4542-99ab-e50cd0b34f4c",
            Host: "smtp.gmail.com",
            Username : "mjb.projects737@gmail.com",
            Password : "ivvxqdjgcmhfcbzn", 
            // Host: "smtp.elasticemail.com",
            // Username: "wwwanandsuresh@gmail.com",
            // Password: "A5BDC18689165F4E2DA81ADF785EF6784A75",
            // To: 'arindam_bora@hotmail.com',
            To: t_email,
            From: "mjb.projects737@gmail.com",
            Subject: "order placed with Valkyre customs  Customers email notification",
            Body: "order has been placed, wait for conformation :)" //add payment link here
        }).then(
            message => alert("order placed")
        );
    }