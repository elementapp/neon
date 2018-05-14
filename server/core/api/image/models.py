from sqlalchemy import Column, Integer, String, DateTime, LargeBinary

from ..common.database import BaseModel
from ..common.serializers import ModelSerializerMixin
from uuid import uuid4
from datetime import datetime


class Image(BaseModel, ModelSerializerMixin):
    id = Column(Integer, primary_key=True, autoincrement=True)
    filename = Column(String)
    date_created = Column(DateTime, default=datetime.now)
    data = Column(LargeBinary, nullable=True, default=None)
    uuid = Column(String, default=uuid4)
