const id = (id: string) => document.getElementById(id)

const dateDiff = (since: Date, then: Date): number => {
	const timeDiff = then.getTime() - since.getTime()
	return Math.floor(timeDiff / (24 * 3600 * 1000))
}

const day = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thurday',
	'Friday',
	'Saturday'
] as const

document.addEventListener(
	'DOMContentLoaded',
	() => {
		const since = new Date('2020-12-31')
		const then = new Date()
		const diff = dateDiff(since, then)

		id('day').textContent = (31 + diff).toString()
		id('date').textContent = day[then.getDay()]
	},
	{
		once: true
	}
)
