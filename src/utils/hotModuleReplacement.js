const HotModuleReplacement = (dep) => {
	if (module.hot) {
		module.hot.accept('../js/home.js', function () {
			// do something
			dep();
		});
	}
};

export default HotModuleReplacement;
