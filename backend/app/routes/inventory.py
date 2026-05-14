from fastapi import APIRouter

router = APIRouter()

inventory_data = [
    {
        "id": 1,
        "material_code": "FAB-001",
        "material_name": "Cotton Fabric",
        "category": "Fabric",
        "unit": "Roll",
        "stock_qty": 500,
        "reserved_qty": 120,
        "available_qty": 380,
        "status": "Available"
    },
    {
        "id": 2,
        "material_code": "THR-002",
        "material_name": "Polyester Thread",
        "category": "Accessories",
        "unit": "Cone",
        "stock_qty": 300,
        "reserved_qty": 80,
        "available_qty": 220,
        "status": "Available"
    },
    {
        "id": 3,
        "material_code": "BTN-003",
        "material_name": "Metal Button",
        "category": "Accessories",
        "unit": "Pack",
        "stock_qty": 100,
        "reserved_qty": 20,
        "available_qty": 80,
        "status": "Low Stock"
    }
]

@router.get("/")
def get_inventory():
    return inventory_data

@router.post("/")
def create_inventory(item: dict):

    item["id"] = len(inventory_data) + 1

    inventory_data.append(item)

    return item