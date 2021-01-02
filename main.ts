import day from 'dayjs'

const id = (id) => document.getElementById(id)

document.addEventListener('DOMContentLoaded', () => {
	const since = day('2020-12-31', 'YYYY-MM-DD'),
		then = day(),
        diff = then.diff(since, 'day')

    id('day').textContent = String(31 + diff)
    id('date').textContent = String(then.format('dddd'))
}, {
    once: true
})
