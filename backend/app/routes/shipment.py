from fastapi import APIRouter

router = APIRouter()

shipment_data = [
    {
        "id": 1,
        "shipment_no": "SHP-1001",
        "buyer": "H&M",
        "destination": "Germany",
        "status": "In Transit"
    },
    {
        "id": 2,
        "shipment_no": "SHP-1002",
        "buyer": "Zara",
        "destination": "Spain",
        "status": "Pending"
    },
    {
        "id": 3,
        "shipment_no": "SHP-1003",
        "buyer": "Next",
        "destination": "UK",
        "status": "Delivered"
    }
]

@router.get("/")
def get_shipments():
    return shipment_data

@router.post("/")
def create_shipment(shipment: dict):

    shipment["id"] = len(shipment_data) + 1

    shipment_data.append(shipment)

    return shipment

@router.put("/{shipment_id}/")
def update_shipment(shipment_id: int, payload: dict):

    for shipment in shipment_data:

        if shipment["id"] == shipment_id:

            shipment["status"] = payload["status"]

            return shipment

    return {"error": "Shipment not found"}