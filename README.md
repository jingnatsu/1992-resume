# 1992 Resume

A modern, responsive resume website built with Astro and Tailwind CSS.

## 🚀 Project Structure

Inside of your resume project, you'll see the following folders and files:

```text
/
├── public/
│   ├── images/
│   │   └── avatar.jpeg
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── CVHeader.astro
│   │   ├── CVSummary.astro
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   ├── CVLayout.astro
│   │   └── Layout.astro
│   └── pages/
│       ├── cv.astro
│       └── index.astro
├── .gitignore
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Run ESLint to check code quality                 |
| `npm run lint:fix`        | Fix ESLint issues automatically                  |
| `npm run format`          | Format code with Prettier                        |
| `npm run format:check`    | Check code formatting with Prettier              |
| `npm run commitlint`      | Run commitlint on commit message                 |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Tech Stack

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Commitlint** - Conventional commit message validation
- **Husky** - Git hooks

## 📁 Features

- Responsive design that works on all devices
- Clean and professional resume layout
- Separate CV page for detailed information
- Modern UI with smooth interactions
- SEO-friendly markup
- Fast loading with Astro's optimization

## 📝 Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes
- `ci`: CI configuration changes
- `build`: Build system changes
- `revert`: Revert previous commit

### Examples:

- `feat: add contact form`
- `fix: resolve mobile navigation issue`
- `docs: update README with deployment instructions`

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist/` folder after building
- **GitHub Pages**: Build and deploy to GitHub Pages
- **Any static hosting**: Build with `npm run build` and upload `dist/` folder

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
