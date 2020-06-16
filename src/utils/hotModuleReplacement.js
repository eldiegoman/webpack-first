const HotModuleReplacement = (dep) => {
	if (module.hot) {
		module.hot.accept('../index.js', function () {
			// do something
			dep();
		});
	}
};

export default HotModuleReplacement;
