const SELECT_ID = 'indent-hide-select'

const head = document.getElementsByTagName('head')[0]
const baseStyle = document.createElement('style')
baseStyle.innerText = `
  .listtype-task::after { background-color: red; }
  .listtype-taskdone::after { background-color: green; }
  .listtype-bullet::after { background-color: orange; }
  .listtype-indent::after { background-color: black; }

  #${SELECT_ID} {
    position:fixed;
    bottom: 60px;
    right: 20px;
  }
  #${SELECT_ID}:focus {
    background-color: skyblue;
  }
`
const style = document.createElement('style')
head.append(baseStyle, style)

const select = document.createElement('select')
select.setAttribute('id', SELECT_ID)
select.innerHTML = '<option selected value="9">-</option>' +
  Array.from({length: 8}, (_, i) => (
    `<option value="${i + 1}">${i + 1}</option>`
  )).join('')

select.addEventListener('change', () => {
  const v = parseInt(select.value)
  const css = Array.from({length: 9 - v}, (_, i) => (`
    .listindent${i + v} {
      visibility: hidden;
      height: 3px;
      position: relative;
    }
    .listindent${i + v}::after {
      content: "";
      visibility: visible;
      display: block;
      height: 3px;
      width: 1.5em;
      position: absolute;
      left: -1.5em;
    }
    .listindent${i + v} li {
      display: none;
    }
    .line-list-type-bullet > .listindent${i + v},
    .line-list-type-indent > .listindent${i + v} {
      padding-top: 3px;
      padding-bottom: 3px;
    }
  `)).join('')
  style.innerText = css
})

const body = document.getElementsByTagName('body')[0]
body.append(select)

document.addEventListener('keypress', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    select.focus()
  }
})
