# Contributing

Thank you for contributing to VIDS AUTOMATION.

1. Use strict TypeScript and keep provider-specific browser interaction isolated behind adapters.
2. Do not add private endpoints, credentials, authentication workarounds, or bypass logic.
3. Add focused Vitest coverage for new queue, parsing, naming, or persistence logic.
4. Before opening a pull request, run `npm run test`, `npm run lint`, and `npm run build`.
5. Keep Chrome permissions minimal and document any permission change in the pull request.
