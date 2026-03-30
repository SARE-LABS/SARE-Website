import { type SchemaTypeDefinition } from "sanity";

import { appPlatform } from "../../src/sanity/schemaTypes/appPlatform";
import { buildAlong } from "../../src/sanity/schemaTypes/buildAlong";
import { component } from "../../src/sanity/schemaTypes/component";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [appPlatform, buildAlong, component],
};
