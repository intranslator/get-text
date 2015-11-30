function create(texts, language) {
  function getText(text) {
    return texts[text][language];
  }

  return getText;
}

module.exports = create;
