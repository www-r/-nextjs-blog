const useThrottle = (callback, time) => {
	setTimeout(callback, time);
};
export default useThrottle;
