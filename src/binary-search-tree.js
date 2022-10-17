const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    function addData(node, data) {
      if (!node) return new Node(data);
      data < node.data ? 
      node.left = addData(node.left, data) : 
      node.right = addData(node.right, data);
      return node;
    }
    this.tree = addData(this.tree, data);
  }

  has(data) {
    function hasData(node, data) {
      if (!node) return false;
      if (data === node.data) return true;
      if (data < node.data) { 
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
    return hasData(this.tree, data)
  }

  find(data) {
    function findData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;
      if (data < node.data) { 
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
    return findData(this.tree, data)
  }

  remove(data) {
    function removeData(node, data) {

      if (!node) return null;
      
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } 
      
      if (node.data === data) {

        if (!node.left) {
            node = node.right;
            return node;
        }

        if (!node.right) {
            node = node.left;
            return node;
        }

        let rightMin = node.right;
        while (rightMin.left) rightMin = rightMin.left;
        node.data = rightMin.data;
        node.right = removeData(node.right, rightMin.data);
        return node;
      }
    }
    this.tree = removeData(this.tree, data);
  }

  min() {
    let min = this.tree;
    while (min.left) min = min.left;
    return min.data;
  }

  max() {
    let max = this.tree;
    while (max.right) max = max.right;
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};