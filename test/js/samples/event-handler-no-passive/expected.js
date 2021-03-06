/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent as SvelteComponent_1,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	var a, dispose;

	return {
		c() {
			a = element("a");
			a.textContent = "this should not navigate to example.com";
			a.href = "https://example.com";
			dispose = listen(a, "touchstart", touchstart_handler);
		},

		m(target, anchor) {
			insert(target, a, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(a);
			}

			dispose();
		}
	};
}

function touchstart_handler(e) {
	return e.preventDefault();
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default SvelteComponent;