from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import NoResultFound

from ..common.exceptions import RecordAlreadyExists, RecordNotFound

from .models import Image


def create_image(image, filename):
    image = Image(data=image, filename=filename)
    try:
        image.save()
    except IntegrityError as e:
        msg = 'Exception on save: {}'.format(e)
        raise RecordAlreadyExists(message=msg)

    return image


def get_image_by_id(image_id):
    try:
        result = Image.query.filter(Image.id == image_id).one()
    except NoResultFound:
        msg = 'There is no image with id {}'.format(image_id)
        raise RecordNotFound(message=msg)

    return result


def get_all_imagees():
    return Image.query.all()


def update_image(image_data, image_id):
    image = get_image_by_id(image_id)
    image.update(**image_data)

    return image


def delete_image(image_id):
    image = get_image_by_id(image_id)
    image.delete()
