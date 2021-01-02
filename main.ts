import day from 'dayjs'

const id = (id) => document.getElementById(id)

document.addEventListener('DOMContentLoaded', () => {
	const since = day('12-31-2020', 'MM-DD-YYYY'),
		then = day(),
        diff = then.diff(since, 'day')

    id('day').textContent = String(31 + diff)
    id('date').textContent = String(then.format('dddd'))
}, {
    once: true
})
