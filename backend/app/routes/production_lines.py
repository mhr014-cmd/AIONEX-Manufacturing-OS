from fastapi import APIRouter

router = APIRouter()

production_lines = [
    {
        "id": 1,
        "line_name": "Line A",
        "supervisor": "Rahim",
        "status": "Running",
        "target_output": 1200,
        "actual_output": 1100,
        "efficiency": 92,
        "defects": 12,
        "operators": 35
    },
    {
        "id": 2,
        "line_name": "Line B",
        "supervisor": "Karim",
        "status": "Running",
        "target_output": 1500,
        "actual_output": 1420,
        "efficiency": 95,
        "defects": 8,
        "operators": 40
    },
    {
        "id": 3,
        "line_name": "Line C",
        "supervisor": "Jamal",
        "status": "Stopped",
        "target_output": 1000,
        "actual_output": 650,
        "efficiency": 65,
        "defects": 20,
        "operators": 25
    }
]

@router.get("/")
def get_production_lines():
    return production_lines