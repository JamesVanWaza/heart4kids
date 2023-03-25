import { loadScript } from "@paypal/paypal-js";

loadScript({ "client-id": ATEDkn0Zmga8XCTxr6gADgstinRBnvFY2cOSIHJScSosQTfeDUTbgJitg3UGvSM8TYV3vazr13bvi0mA })
    .then((paypal) => {
        components = paypal.Buttons({
            style: {
                layout: "vertical",
                color: "gold",
                shape: "pill",
                label: "paypal the mbuzi",
            }
        }.render("#paypal-button-container"));
        intent = "CAPTURE";
    })
    .catch(err => {});