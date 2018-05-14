from flask import request, send_file
import io
from ..common.validation import schema

from . import bp
from . import domain


@bp.route('/image', methods=['POST'])
# @schema('create_image.json')
def create_image():
    return domain.create_image(request.files)


@bp.route('/image', methods=['GET'])
def get_images():
    return domain.get_all_imagees()


@bp.route('/image/<image_id>', methods=['GET'])
def get_image(image_id):
    return send_file(io.BytesIO(domain.get_image_by_id(image_id)), mimetype='image/png')


@bp.route('/image/<image_id>', methods=['PUT'])
# @schema('/update_image.json')
def update_image(image_id):
    return domain.update_image(request.json, image_id)


@bp.route('/image/<image_id>', methods=['DELETE'])
def delete_image(image_id):
    domain.delete_image(image_id)

    return {
        'message': 'image with `id: {}` has been deleted.'.format(image_id)
    }
