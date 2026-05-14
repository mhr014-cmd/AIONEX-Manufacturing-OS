from fastapi import APIRouter

router = APIRouter()

orders_data = [
    {
        "id": 1,
        "order_no": "PO-555",
        "buyer": "Hamim",
        "style": "T-Shirt",
        "quantity": 5000,
        "status": "Pending"
    },
    {
        "id": 2,
        "order_no": "PO5508",
        "buyer": "Kohls",
        "style": "1258",
        "quantity": 12000,
        "status": "Sewing"
    },
    {
        "id": 3,
        "order_no": "PO-1223",
        "buyer": "Next",
        "style": "005",
        "quantity": 15000,
        "status": "Completed"
    }
]

@router.get("/")
def get_orders():
    return orders_data

@router.post("/")
def create_order(order: dict):

    order["id"] = len(orders_data) + 1

    orders_data.append(order)

    return order

@router.put("/{order_id}/")
def update_order(order_id: int, payload: dict):

    for order in orders_data:

        if order["id"] == order_id:

            order["status"] = payload["status"]

            return order

    return {"error": "Order not found"}