var React = require('react')

module.exports = function(childrenObject) {
    return React.Fragment({children: Object.values(childrenObject)})
}

