/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent as SvelteComponent_1,
	init,
	noop,
	safe_not_equal
} from "svelte/internal";
import { onMount } from "svelte";

function create_fragment(ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

function instance($$self, $$props, $$invalidate) {
	let { foo = 'bar' } = $$props;

	onMount(() => {
		alert(JSON.stringify(data()));
	});

	$$self.$set = $$props => {
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	return { foo };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["foo"]);
	}
}

export default SvelteComponent;