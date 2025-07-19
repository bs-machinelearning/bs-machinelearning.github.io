# bs-machinelearning.github.io
BSML Official Website

## Adding a New Project Page

Project pages are automatically generated from `project.json`. Each project is identified by a unique `id`.

To add a new project page:

1. **Add your project to `project.json`**  
   - Fill in all required attributes and include any necessary files.
   - Ensure the `id` is unique.

2. **Create a markdown file named `<id>.md`**  
   - Use the project's `id` as the filename.
   - Add the project date in the format `YYMMDD`.

3. **Push your changes**  
   - The system will:
     - Generate a new `.html` page for your project
     - Render your markdown as HTML and serve it on the website
     - Create a project card and link it to your new page

**No manual HTML editing is required—just update the JSON and add your markdown file.**

## To-do's
- [ ] Refactor events and hackathons with the same logic as projects
- [ ] Clean html code (lots of useless entries and comments)