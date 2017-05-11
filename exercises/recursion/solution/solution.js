module.exports = getDependencies
// Example uses ideas from my [`Functional JS article`](https://github.com/justsml/escape-from-callback-mountain/)
// #### removes side-effects, uses destructuring for readability, single chain of logic
function getDependencies({dependencies = {}}, result = []) {
  return Object.keys(dependencies).reduce(function _collectDeps(result, dep) {
    let key = dep + '@' + dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    return getDependencies(dependencies[dep], result)
  }, result)
  .sort()
}
