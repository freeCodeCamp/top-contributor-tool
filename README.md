# Top Contributor Tools

This project is a CLI tool that aggregates a list of top contributors for our `/learn` repository, Crowdin translations, forum, and news publication.

## Generating Data

To run this tool, complete the following steps:

- Clone this repository locally.
- Run `npm ci` to install the dependencies.
- Run `npm run build` to compile the TypeScript.
- Run `cp sample.env .env` to generate your secrets file.
- Configure your secrets:
  - `GITHUB_TOKEN`: A GitHub PAT token with `repo` scope.
  - `GHOST_KEY`: A _Content_ API key for the Ghost publication.
  - `CROWDIN_KEY`: An API key for Crowdin, with access to all projects and the `reports` scope.
- Run `npm start` to launch the tool.

The tool will then begin collecting data, aggregating the results, and storing the results in `.csv` files. The files will be saved to the `data` directory, and can be opened with a text editor or most spreadsheet programs.

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).
