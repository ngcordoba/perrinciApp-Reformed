import { openBrowserAsync } from "expo-web-browser";
import { ACCESS_TOKEN } from "../../config.json"

export const handleIntegrationMP = async () => {
    const preference = {
        "items": [
            {
                "title": "name",
                "description": `Compra de celular `,
                "picture_url": "imagen",
                "category_id": "cells",
                "quantity": 1,
                "currency_id": "$",
                "unit_price": 10
            }
        ]
    }

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        })

        const data = await response.json()
        console.log(data.init_point)
        return data.init_point

    } catch (error) {
        console.log(error)
    }
}