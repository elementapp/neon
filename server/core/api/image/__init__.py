from flask import Blueprint


BP_NAME = 'image'
bp = Blueprint(BP_NAME, __name__)

from . import views
