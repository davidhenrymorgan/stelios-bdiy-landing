# Git Workflow & Best Practices

## 🎯 Core Principles

1. **Never commit directly to main** - Always use feature branches
2. **Use conventional commits** - Standardized, semantic commit messages
3. **Commit early and often** - Small, atomic commits are better than large ones
4. **Write meaningful commit messages** - Future you will thank present you
5. **Keep commits focused** - One logical change per commit

## 🌳 Branch Strategy

### Branch Naming Convention
```
feat/     - New features (feat/user-authentication)
fix/      - Bug fixes (fix/email-validation)
refactor/ - Code refactoring (refactor/api-client)
docs/     - Documentation updates (docs/api-guide)
style/    - Formatting, missing semicolons (style/format-components)
test/     - Adding or updating tests (test/auth-unit-tests)
chore/    - Maintenance tasks (chore/update-dependencies)
hotfix/   - Critical production fixes (hotfix/payment-processing)
```

### Workflow
```bash
# 1. Always start from updated main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feat/your-feature-name

# 3. Make changes and commit frequently
git add .
git commit -m "feat: add user authentication"

# 4. Push to remote
git push -u origin feat/your-feature-name

# 5. Create Pull Request for review
# 6. Merge after approval
# 7. Delete feature branch
git branch -d feat/your-feature-name
```

## 📝 Commit Message Format

### Structure
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates
- **revert**: Reverting a previous commit

### Examples
```bash
# Simple feature
git commit -m "feat: add email validation to signup form"

# Bug fix with description
git commit -m "fix: resolve memory leak in data fetching

The useEffect cleanup function was missing, causing subscriptions
to persist after component unmount."

# Breaking change
git commit -m "feat!: update API response format

BREAKING CHANGE: API now returns data in 'results' field instead of 'items'"
```

## 🔄 Common Git Commands

### Daily Workflow
```bash
# Check status
git status

# View changes
git diff
git diff --staged

# Add files
git add <file>           # Specific file
git add .               # All files
git add -p              # Interactive staging

# Commit
git commit -m "message"
git commit --amend      # Modify last commit

# Push/Pull
git push origin <branch>
git pull origin main
```

### Branch Management
```bash
# List branches
git branch              # Local
git branch -r           # Remote
git branch -a           # All

# Switch branches
git checkout <branch>
git switch <branch>     # Newer syntax

# Create and switch
git checkout -b <new-branch>
git switch -c <new-branch>

# Delete branch
git branch -d <branch>  # Safe delete
git branch -D <branch>  # Force delete

# Merge
git merge <branch>
```

### Stashing
```bash
# Save work temporarily
git stash
git stash save "description"

# Apply stashed work
git stash pop           # Apply and remove
git stash apply         # Apply and keep

# List stashes
git stash list

# Drop stash
git stash drop stash@{0}
```

### History & Debugging
```bash
# View history
git log --oneline --graph --all
git log -p              # With diffs
git log --since="2 weeks ago"

# Find who changed what
git blame <file>

# Search commits
git log --grep="search term"

# Undo changes
git reset --soft HEAD~1  # Undo commit, keep changes
git reset --hard HEAD~1  # Undo commit and changes
git revert <commit>      # Create new commit that undoes
```

## 🚀 Project-Specific Guidelines

### Component Development
```bash
# Creating new component
git checkout -b feat/component-name
# Make component changes
git add components/
git commit -m "feat(ui): add new Button component with variants"
```

### Bug Fixes
```bash
# Fixing a bug
git checkout -b fix/issue-description
# Fix the issue
git add .
git commit -m "fix: resolve form submission error on empty fields"
```

### Dependencies
```bash
# After installing packages
git add package.json package-lock.json
git commit -m "chore: add [package-name] dependency for [purpose]"
```

## 🔍 Pre-Commit Checklist

Before committing, ensure:
- [ ] Code runs without errors (`npm run dev`)
- [ ] Linting passes (`npm run lint`)
- [ ] Tests pass (when added)
- [ ] No console.logs or debugging code
- [ ] No commented-out code blocks
- [ ] Commit message follows convention
- [ ] Changes are focused and atomic

## 🆘 Troubleshooting

### Accidentally committed to main
```bash
# Create backup branch from main
git branch backup-main

# Reset main to origin
git checkout main
git reset --hard origin/main

# Create feature branch from backup
git checkout -b feat/your-feature backup-main

# Delete backup
git branch -d backup-main
```

### Need to undo last commit
```bash
# Keep changes
git reset --soft HEAD~1

# Discard changes
git reset --hard HEAD~1
```

### Merge conflicts
```bash
# Update your branch with latest main
git checkout main
git pull origin main
git checkout your-branch
git merge main

# Resolve conflicts in files
# Then:
git add .
git commit -m "fix: resolve merge conflicts with main"
```

## 📊 Git Aliases (Optional)

Add to your `.gitconfig`:
```ini
[alias]
    st = status
    co = checkout
    br = branch
    cm = commit -m
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --oneline --graph --all
    amend = commit --amend --reuse-message=HEAD
```

## 🎯 Remember

- **Commit messages are documentation** - They explain why, not what
- **Feature branches are temporary** - Merge and delete promptly
- **Main branch is sacred** - It should always be deployable
- **Reviews matter** - Fresh eyes catch issues you might miss
- **Git history is forever** - Think before force pushing