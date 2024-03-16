## Eslint config
First, run `./node_modules/.bin/eslint --init`. The eslint script will create an eslint file in your project root (normally we will use `airbnb` settings).

After that, add some plugins:
- NextJS's eslint
- Prettier
- Tailwind Sort
- Order import

## Folder Structure:
```
├── app (for containing your app)
│   ├── (public) (route groups for public)
│   └── (auth) (route groups for dashboard)
├── components
│   ├── layout (header, footer, ...)
│   └── Other components
├── constants (contains constants)
├── lib (contains utility functions)
├── providers (contains providers)
├── public (contains static files)
└── README.md (main documentation)
```
