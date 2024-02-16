import { ACCESS_TOKEN } from "../../config.json"

export const handleIntegrationMP = async (walkerInfo) => {
    const preference = {
        "items": [
            {
                "title": `Paseo con ${walkerInfo.name}` ,
                "description": "Paseo de mascotas",
                "picture_url": "imagen",
                "category_id": "cells",
                "quantity": 1,
                "currency_id": `$`,
                "unit_price": 100,
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