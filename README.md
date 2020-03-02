# Clean Architecture Skeleton

A clean, bare bones application using .NET Core, React, and MobX

## Prerequisites

1. Dotnet Core SDK v3.1.x
2. NodeJS

## Run (Local)

1. From the API folder run `dotnet watch run`
2. From the client-app folder, run `npm start`

## Adding Migration Scripts
1. Add the DbSet to the Data Context in the Persistence project
2. If you do not have the Entity Framework Core .NET Command-line Tools installed (check with `dotnet ef --version`), then you will want
to install them using the `dotnet tool install --global dotnet-ef` command.
3. Add the migration by running `dotnet ef migrations add "ActivityEntityAdded" -p Persistence/ -s API/` from the solution folder.

## Recommended Extensions for Visual Studio Code Users

| Extension | Author |
| --------- |:------:|
| Auto Close Tag | Jun Han |
| Auto Rename Tag | Jun Han |
| Bracket Pair Colorizer | CoenraadS |
| C# | Microsoft |
| C# Extensions | jchannon |
| ES7 React/Redux/GraphQL/React-Native snippets | dsznajder |
| Material Icon Theme | Philipp Kief |
| NuGet Package Manager | jmrog |
| Prettier - Code formatter | Esben Petersen |
| SQLite | alexcvzz |

## VS Code Snippets

1. You can go to File -> Preferences -> User Snippets -> New Snippet File For \<Solution\> to create
a new snippets file for the project in your .vscode folder.
2. Open the new file and replace the comments with the following
```
"Query Handler": {
		"prefix": "qhandler",
		"body": [
		  "public class Query : IRequest<${1:ReturnObject}> {}",
		  "",
		  "        public class Handler : IRequestHandler<Query, ${1:ReturnObject}>",
		  "        {",
		  "            private DataContext _context;",
		  "",
		  "            // DataContext is temporary.  We don't want the application knowing about the persistence layer",
		  "            public Handler(DataContext context)",
		  "            {",
		  "                _context = context;",
		  "            }",
		  "",
		  "            public async Task<${1:ReturnObject}> Handle(Query request, CancellationToken cancellationToken)",
		  "            {",
		  "                // Handler logic",
		  "            }",
		  "        }"
		],
		"description": "Query Handler"
	  },
	  "Command Handler": {
		"prefix": "chandler",
		"body": [
		  "public class Command : IRequest",
		  "        {",
		  "            // TODO: Add command properties here",
		  "        }",
		  "",
		  "        public class Handler : IRequestHandler<Command>",
		  "        {",
		  "            private DataContext _context;",
		  "",
		  "            public Handler(DataContext context)",
		  "            {",
		  "                _context = context;",
		  "            }",
		  "",
		  "            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)",
		  "            {",
		  "                // TODO: handle your change here before it gets saved below",
		  "",
		  "                if (await _context.SaveChangesAsync() > 0)",
		  "                    return Unit.Value;",
		  "                ",
		  "                throw new Exception(\"Problem saving changes\");",
		  "",
		  "            }",
		  "        }"
		],
		"description": "Command Handler"
	  }
```

## Credit

This project was started while working through the Udemy course "Complete Guide to Building an App with .Net Core and React" by Neil Cummings
