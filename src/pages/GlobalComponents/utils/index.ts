export const formarDuration = (duration: number) => {
	const mins = Math.floor(duration / 60);
	const secs = duration % 60;
	return mins + " phút " + secs + " giây";
};
