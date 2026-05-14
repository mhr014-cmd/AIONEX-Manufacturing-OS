from sqlalchemy import Column, Integer, String

from app.database import Base


class ProductionOrder(Base):
    __tablename__ = "production_orders"

    id = Column(Integer, primary_key=True, index=True)

    order_no = Column(String, unique=True, nullable=False)

    buyer = Column(String, nullable=False)

    style = Column(String, nullable=False)

    quantity = Column(Integer, nullable=False)

    status = Column(String, default="Pending")