from pydantic import BaseModel


class ShipmentCreate(BaseModel):
    shipment_no: str
    buyer: str
    destination: str


class ShipmentResponse(BaseModel):
    id: int
    shipment_no: str
    buyer: str
    destination: str
    status: str

    class Config:
        from_attributes = True