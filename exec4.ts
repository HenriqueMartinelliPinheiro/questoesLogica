const revenuesByState = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

const totalRevenue = Object.values(revenuesByState).reduce(
	(acc, value) => acc + value,
	0
);

const percentages = Object.entries(revenuesByState).map(([state, revenue]) => {
	const percentage = (revenue / totalRevenue) * 100;
	return { state, percentage: percentage.toFixed(2) };
});

percentages.forEach(({ state, percentage }) => {
	console.log(`${state}: ${percentage}%`);
});
