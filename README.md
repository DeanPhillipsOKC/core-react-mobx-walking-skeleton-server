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

## Credit

This project was started while working through the Udemy course "Complete Guide to Building an App with .Net Core and React" by Neil Cummings
