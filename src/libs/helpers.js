export const deepSearch = (data, value, key = '__key', sub = 'children', tempObj = {}) => {
  if (value && data) {
    data.find((node) => {
      if (node[key] == value) {
        tempObj.found = node;
        return node;
      }
      return deepSearch(node[sub], value, key, sub, tempObj);
    });
    if (tempObj.found) {
      return tempObj.found;
    }
  }
  return false;
};

export const deepSearch_API = (data, value, key = '__key', sub = 'children', tempObj = {}) => {
  if (value && data) {
    data.find((node) => {
      if (node[key] == value) {

        node.hook = () => {
          return { 
            parentNode: data, 
            node 
          }
        }

        tempObj.found = node;
        return node;
      }
      return deepSearch_API(node[sub], value, key, sub, tempObj);
    });
    if (tempObj.found) {
      return tempObj.found;
    }
  }
  return false;
}

export const getParents = (el, parentSelector) => {
  let MaybeParents = document.querySelectorAll(parentSelector);
  let i = 0;
  let isParents = [];
  while (i < [...MaybeParents].length) {
    if(MaybeParents[i].contains(el)) {
      isParents.push(MaybeParents[i]);
    }
    i += 1;
  }

  return isParents.length > 0 ? isParents : false;
}