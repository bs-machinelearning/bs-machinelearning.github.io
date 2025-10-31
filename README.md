# BSML Official Website

Static website for the **Bocconi Students for Machine Learning** association, built with [Jekyll](https://jekyllrb.com/).


## Repository Structure
```
.
├── _events/       # Event markdown files
├── _hackathons/   # Hackathon descriptions
├── _layouts/      # HTML layout templates
├── _projects/     # Project pages (by date)
├── _site/         # Generated static site output
├── _theses/       # Thesis summaries and metadata
├── assets/        # CSS, JS, images, PDFs, and templates
├── pages/         # Main pages (events, hackathons, projects, theses, etc.)
├── index.html     # Homepage
└── _config.yml    # Jekyll configuration
```


## Development

### Option 1: Using Nix

Clone the repository and start a Nix development shell:
```bash
git clone https://github.com/bs-machinelearning/bs-machinelearning.github.io.git
cd bs-machinelearning.github.io
nix develop
```

### Option 2: Using Bundler

Install dependencies and run Jekyll locally:
```bash
bundle install
bundle exec jekyll serve
```

Then open the site in your browser at [http://localhost:4000](http://localhost:4000).


## Content Creation

All content (projects, events, hackathons, and theses) is managed using Markdown files for simplicity.

Each type of content lives in its own folder:

* `_projects/` → project pages
* `_events/` → event pages
* `_hackathons/` → hackathon summaries
* `_theses/` → thesis summaries and metadata

Each file uses [YAML front matter](https://jekyllrb.com/docs/front-matter/) to define its title, date, and other metadata. Example:
```markdown
---
title: "Deep Learning for Time Series"
author: "Jane Doe"
date: 2025-05-20
tags: [deep-learning, forecasting]
---
This project explores the use of LSTM models for time-series prediction.
```

You can add HTML or inline CSS inside the Markdown file if you need a custom layout or visuals.

When you add a new Markdown file to one of these folders, Jekyll automatically includes it in the generated site.


## Contributing

### Reporting Issues

If you find a bug, missing content, or design issue, open a [GitHub issue](https://github.com/bs-machinelearning/bs-machinelearning.github.io/issues).

### Opening a Pull Request

1. **Fork the repository:**
   Click **Fork** on the project's GitHub page.

2. **Clone your fork:**
```bash
   git clone https://github.com/<your-username>/bs-machinelearning.github.io.git
   cd bs-machinelearning.github.io
```

3. **Create a new branch:**
```bash
   git checkout -b feature/add-new-content
```

4. **Make your changes** (add Markdown, fix layout, etc.).

5. **Commit and push:**
```bash
   git add .
   git commit -m "Add new project: Deep Learning for Time Series"
   git push origin feature/add-new-content
```

6. **Open a Pull Request:**
   Go to your fork on GitHub and click **New Pull Request**.

Your PR will be reviewed and merged after validation.
