import Check from "../Core/Check.js";
import defaultValue from "../Core/defaultValue.js";
import MetadataEntity from "./MetadataEntity.js";

/**
 * Metadata about a 3D Tile. This represents the <code>3DTILES_metadata</code>
 * extension on a single {@link Cesium3DTile}
 *
 * @param {Object} options Object with the following properties:
 * @param {Object} options.tile The extension JSON attached to the tile.
 * @param {MetadataClass} [options.class] The class that the tile metadata conforms to.
 *
 * @alias TileMetadata
 * @constructor
 * @private
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
export default function TileMetadata(options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);

  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("options.tile", options.tile);
  //>>includeEnd('debug');

  this._class = options.class;

  var tileMetadata = options.tile;
  this._properties = tileMetadata.properties;
  this._extensions = tileMetadata.extensions;
  this._extras = tileMetadata.extras;
}

Object.defineProperties(TileMetadata.prototype, {
  /**
   * The class that properties conform to.
   *
   * @memberof TileMetadata.prototype
   * @type {MetadataClass}
   * @readonly
   */
  class: {
    get: function () {
      return this._class;
    },
  },

  /**
   * Extras in the JSON object.
   *
   * @memberof TileMetadata.prototype
   * @type {*}
   * @readonly
   */
  extras: {
    get: function () {
      return this._extras;
    },
  },

  /**
   * Extensions in the JSON object.
   *
   * @memberof TileMetadata.prototype
   * @type {Object}
   * @readonly
   */
  extensions: {
    get: function () {
      return this._extensions;
    },
  },
});

/**
 * Returns whether this property exists.
 *
 * @param {String} propertyId The case-sensitive ID of the property.
 * @returns {Boolean} Whether this property exists.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.hasProperty = function (propertyId) {
  return MetadataEntity.hasProperty(propertyId, this._properties, this._class);
};

/**
 * Returns an array of property IDs.
 *
 * @param {String[]} [results] An array into which to store the results.
 * @returns {String[]} The property IDs.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.getPropertyIds = function (results) {
  return MetadataEntity.getPropertyIds(this._properties, this._class, results);
};

/**
 * Returns a copy of the value of the property with the given ID.
 * <p>
 * If the property is normalized the normalized value is returned.
 * </p>
 *
 * @param {String} propertyId The case-sensitive ID of the property.
 * @returns {*} The value of the property or <code>undefined</code> if the property does not exist.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.getProperty = function (propertyId) {
  return MetadataEntity.getProperty(propertyId, this._properties, this._class);
};

/**
 * Sets the value of the property with the given ID.
 * <p>
 * If the property is normalized a normalized value must be provided to this function.
 * </p>
 *
 * @param {String} propertyId The case-sensitive ID of the property.
 * @param {*} value The value of the property that will be copied.
 * @returns {Boolean} <code>true</code> if the property was set, <code>false</code> otherwise.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.setProperty = function (propertyId, value) {
  return MetadataEntity.setProperty(
    propertyId,
    value,
    this._properties,
    this._class
  );
};

/**
 * Returns a copy of the value of the property with the given semantic.
 *
 * @param {String} semantic The case-sensitive semantic of the property.
 * @returns {*} The value of the property or <code>undefined</code> if the property does not exist.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.getPropertyBySemantic = function (semantic) {
  return MetadataEntity.getPropertyBySemantic(
    semantic,
    this._properties,
    this._class
  );
};

/**
 * Sets the value of the property with the given semantic.
 *
 * @param {String} semantic The case-sensitive semantic of the property.
 * @param {*} value The value of the property that will be copied.
 * @returns {Boolean} <code>true</code> if the property was set, <code>false</code> otherwise.
 * @experimental This feature is using part of the 3D Tiles spec that is not final and is subject to change without Cesium's standard deprecation policy.
 */
TileMetadata.prototype.setPropertyBySemantic = function (semantic, value) {
  return MetadataEntity.setPropertyBySemantic(
    semantic,
    value,
    this._properties,
    this._class
  );
};
