function merge(a, b, comparator) {
  var ret = [];
  while (a.length + b.length > 0) {
    if (a.length === 0) {
      ret.push(b.shift());
    } else if (b.length === 0) {
      ret.push(a.shift());
    } else {
      if (comparator(a[0], b[0]) > 0) {
        ret.push(b.shift());
      } else {
        ret.push(a.shift());
      }
    }
  }
  return ret;
}

var mergesort = module.exports = function(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  if (arr.length <= 1) return arr;

  var mid = arr.length / 2;

  return merge(
    mergesort(arr.slice(0, mid), comparator),
    mergesort(arr.slice(mid), comparator),
    comparator
  );
};
