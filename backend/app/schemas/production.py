from pydantic import BaseModel


class ProductionCreate(BaseModel):
    order_no: str
    buyer: str
    style: str
    quantity: int


class ProductionResponse(BaseModel):
    id: int
    order_no: str
    buyer: str
    style: str
    quantity: int
    status: str

    class Config:
        from_attributes = True