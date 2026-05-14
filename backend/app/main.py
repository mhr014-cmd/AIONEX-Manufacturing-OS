from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.orders import router as orders_router
from app.routes.inventory import router as inventory_router
from app.routes.shipment import router as shipment_router
from app.routes.production_lines import router as production_lines_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AIONEX Backend Running"}

app.include_router(
    orders_router,
    prefix="/orders",
    tags=["Orders"]
)

app.include_router(
    inventory_router,
    prefix="/inventory",
    tags=["Inventory"]
)

app.include_router(
    shipment_router,
    prefix="/shipments",
    tags=["Shipments"]
)

app.include_router(
    production_lines_router,
    prefix="/production-lines",
    tags=["Production Lines"]
)