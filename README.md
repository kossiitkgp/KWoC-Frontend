# KWoC
Checkout [wiki](https://github.com/kossiitkgp/kwoc/wiki) for motivation.

## Workflow
* The `master` branch will serve for development purpose. Send PRs from feature branches, not `master`. Successful PRs can be merged to `master`.
* Build and run the static site locally only after checking out to `master`.
* Only things in the `gh-pages` branch will show up on the [website](https://kwoc.kossiitkgp.org/). Be careful on adding files to `gh-pages`. Files like `README.md` should never go on `gh-pages` as it can be accessed publicly.
* Before KWoC commences a coming soon page should be live. When KWoC starts, this should be moved to `coming-soon` branch and things from the `master` branch should come on `gh-pages`.
* Configure Travis CI by considering this `master` -> `gh-pages` flow.

## Sheets
* [Subscriptions from Coming Soon page](https://docs.google.com/spreadsheets/d/1pNmWCqZC5nU5cCV1K7qJPvjjZMlOWh_Tw427x94u-Gs/edit?usp=sharing)
