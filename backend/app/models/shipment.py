from sqlalchemy import Column, Integer, String

from app.database import Base


class Shipment(Base):
    __tablename__ = "shipments"

    id = Column(Integer, primary_key=True, index=True)

    shipment_no = Column(String, unique=True, index=True)

    buyer = Column(String)

    destination = Column(String)

    status = Column(String, default="In Transit")