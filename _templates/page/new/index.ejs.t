---
to: src/components/pages/<%= h.inflection.camelize(name) %>/index.ts
---
import <%= h.capitalize(name) %> from './<%= h.capitalize(name) %>Page';

export default <%= h.capitalize(name) %>;
