import type { Action } from 'svelte/action';

/** Fades an element in the first time it scrolls into view. */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	node.classList.add('reveal');
	node.style.setProperty('--delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	observer.observe(node);

	return { destroy: () => observer.disconnect() };
};
