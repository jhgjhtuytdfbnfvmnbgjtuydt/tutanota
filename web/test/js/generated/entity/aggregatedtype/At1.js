"use strict";

tutao.provide('tutao.entity.aggregatedtype.At1');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.aggregatedtype.At1 = function(parent, data) {
  if (data) {
    this.updateData(parent, data);
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
  }
  this._parent = parent;
  this.prototype = tutao.entity.aggregatedtype.At1.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.aggregatedtype.At1.prototype.updateData = function(parent, data) {
  this.__id = data._id;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.aggregatedtype.At1.prototype.toJsonData = function() {
  return {
    _id: this.__id
  };
};

/**
 * Sets the id of this At1.
 * @param {string} id The id of this At1.
 */
tutao.entity.aggregatedtype.At1.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this At1.
 * @return {string} The id of this At1.
 */
tutao.entity.aggregatedtype.At1.prototype.getId = function() {
  return this.__id;
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.aggregatedtype.At1.prototype.getEntityHelper = function() {
  return this._parent.getEntityHelper();
};
