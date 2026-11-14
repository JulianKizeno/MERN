# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## react/03-counter-app

npm findings before: {"info": 0, "low": 14, "moderate": 107, "high": 62, "critical": 19, "total": 202}. After remediation: {"info": 0, "low": 14, "moderate": 99, "high": 36, "critical": 0, "total": 149}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "MERN/react/03-counter-app",   "manifest_sha256": "220c2ec447a38177ed86e5b17470288d980fb208eba9b2b87cc5385791c4a663",   "lock_sha256": "045709f7b2a9af21c6986a701cc6daf73a1e0c073326f591c0cf3002a9fbde73",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.

## react/02-intro-javascript

npm findings before: {"info": 0, "low": 14, "moderate": 107, "high": 62, "critical": 19, "total": 202}. After remediation: {"info": 0, "low": 14, "moderate": 99, "high": 36, "critical": 0, "total": 149}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "MERN/react/02-intro-javascript",   "manifest_sha256": "122f2e130fd52a481f7b3bbc35aed0fc7418f26ce20501eb84860081c71bc411",   "lock_sha256": "6f6013636bdeb9b0aaa0a41ec84bbdfbd163fcc9807098d1ad0771d19bbdf044",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.
