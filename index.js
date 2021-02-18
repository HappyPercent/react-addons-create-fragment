var React = require('react')

module.exports = function(childrenObject) {
    return React.createElement(React.Fragment, null, ...Object.values(childrenObject))
}
