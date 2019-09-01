const _ = require("lodash");

/**
 * Page Factory Methods
 */
class PageFactory {
	/**
     * Instantiate the object
     */
	constructor(world) {
		this.world = world;
	}

	/**
     * Factory method
     * @param {String} name - name
     */
	create(name) {
		const fileName = `./pages/${_.upperFirst(_.camelCase(name))}Page.js`;
		let ClassName;

		try {
			ClassName = require(fileName);
			return new ClassName(this.world);
		} catch (error) {
			throw new Error(`${ClassName} page not found`);
		}
	}
}

module.exports = PageFactory;
