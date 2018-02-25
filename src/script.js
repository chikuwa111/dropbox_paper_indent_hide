const head = document.getElementsByTagName('head')[0]
const style = document.createElement('style')
head.append(style)

const select = document.createElement('select')
select.setAttribute('style', 'position: fixed; bottom: 60px; right: 20px;')
select.innerHTML = '<option selected value="9"></option>' +
  Array.from({length: 8}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')

select.addEventListener('change', () => {
  const v = parseInt(select.value)
  const css = Array.from({length: 9 - v}, (_, i) => `.listindent${i + v} {display: none;}`).join(' ')
  style.innerText = css
})

const body = document.getElementsByTagName('body')[0]
body.append(select)
