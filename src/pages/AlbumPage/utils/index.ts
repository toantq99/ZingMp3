export const formatDuration = (duration: number) => {
	const mins = Math.floor(duration / 60);
	const secs = Math.floor(duration % 60);

	return mins + ":" + secs;
};
