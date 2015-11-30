function create(texts, language) {
  function getText(text) {
    return (texts[text] || {})[language] || text;
  }

  return getText;
}

module.exports = create;
