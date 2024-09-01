export default function highlight(content, words='') {
  return words
    .trim()
    .split('+')
    .reduce(
      (hc, word) => hc.replace(
        new RegExp(word, 'gi'),
        `<span class="highlight">${word}</span>`
      )
    , content)
}
  