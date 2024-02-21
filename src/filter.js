let filterBtnCompleter = document.querySelector('.btn-complete')
filterBtnCompleter.addEventListener('click', filterComplete)

let filterBtnReset = document.querySelector('.btn-reset')
filterBtnReset.addEventListener('click', filterReset)


function filterComplete(e) {
    const btn = e.target
    const filter = btn.closest('.filter')
    let items = filter.querySelectorAll('.filter__item')
    let checkboxTrue = []
    items.forEach(el => el.querySelector('.filter__checkbox').checked ? checkboxTrue.push(el.dataset.filter) : null)
    console.log(checkboxTrue)
}

function filterReset(e) {
    const btn = e.target
    const filter = btn.closest('.filter')
    const items = filter.querySelectorAll('.filter__item')
    items.forEach(el => {
        let checkbox = el.querySelector('.filter__checkbox')
        if (checkbox.checked) checkbox.checked = false
    })

}