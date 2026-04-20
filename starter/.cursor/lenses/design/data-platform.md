# Design Agent — Data platform

Extends [base](base.md). Use for data dashboards, pipelines UI, and analytics experiences.

## Focus
* **Data density vs clarity:** Balance tables/charts with progressive disclosure; avoid overwhelming at first view.
* **Loading & empty:** Skeleton/placeholders for data; clear empty state when no data or no results.
* **Error & recovery:** Failed queries, timeouts, and partial data; retry and fallback actions.
* **Filters & time range:** Visible, predictable controls; state in URL or shareable when useful.
* **A11y:** Screen-reader-friendly tables and charts (summaries, captions); sufficient contrast for status and trend colors.

Align states and interactions with data workflows: explore, filter, export, drill-down.
