from . import backend
from werkzeug.utils import secure_filename

def create_image(files):
    """Create image.
    :param image_data: image information
    :type image_data: dict
    :returns: serialized image object
    :rtype: dict
    """
    image = files.get('image', None)

    image = backend.create_image(image.read(), secure_filename(image.filename))

    return image.to_dict(exclude=['data'])


def get_image_by_id(image_id):
    """Get image by id.
    :param image_id: id of the image to be retrived
    :type image_id: integer
    :returns: serialized image object
    :rtype: dict
    """
    image = backend.get_image_by_id(image_id)

    return image.data


def get_all_images():
    """Get all images.
    :returns: serialized image objects
    :rtype: list
    """
    images = backend.get_all_images()
    return [
        image.to_dict() for image in images
    ]


def update_image(image_data, image_id):
    """Update image.
    :param image_data: image information
    :type image_data: dict
    :param image_id: id of the image to be updated
    :type image_id: integer
    :returns: serialized image object
    :rtype: dict
    """
    image = backend.update_image(image_data, image_id)

    return image.to_dict()


def delete_image(image_id):
    """Delete image.
    :param image_id: id of the image to be deleted
    :type image_id: integer
    """
    backend.delete_image(image_id)
