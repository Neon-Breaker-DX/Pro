# VIDS AUTOMATION

An open-source Chrome Extension for persistent, batch-oriented video, image, and voice generation workflows. It is being built from scratch and deliberately does not use private endpoints, credentials, or bypass mechanisms.

## Phase 1 status

This commit establishes the strict TypeScript workspace, Manifest V3 extension entry points, React/Vite popup build, and a minimal Fastify health service. The popup is a scaffold only; queue operations, importers, adapters, and downloads will arrive in the planned implementation phases.

## Development

```sh
npm install
npm run dev
npm run build
npm run test
npm run lint
```

`npm run build` produces a loadable extension in `dist/`. Load it from `chrome://extensions` with Developer mode enabled. The manifest is copied into the distribution as part of the Vite build configuration.

## Safety

The extension will only interact with websites through supported browser permissions and the user's existing authenticated session. It will not store passwords/cookies or circumvent CAPTCHAs, paywalls, rate limits, or security controls.
