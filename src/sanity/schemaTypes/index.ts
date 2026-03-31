import { type SchemaTypeDefinition } from "sanity";

import { appPlatform } from "./appPlatform";
import { buildAlong } from "./buildAlong";
import { component } from "./component";
import { codeSetup } from "./codeSetup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [appPlatform, buildAlong, component, codeSetup],
};
