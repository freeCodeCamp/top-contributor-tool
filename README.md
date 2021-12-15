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

## Aggregating Data

After following the steps in the "Generating Data" section above, you can use the tool to aggregate data into a markdown file. Run `npm run aggregate` to start the automated process. The tool will read each `.csv` file within the `data` directory and parse it into a markdown list. The first column in each `.csv` file should be the contributor's _name_, and the second column should be the contributor's _url_ (GitHub, Twitter, YouTube, etc.). The tool will ignore any columns after the second column. The tool will generate the list in a `- [name](url)` format, to allow hotlinks. If the `url` is empty, the tool will add the contributor in the `- name` format.

The list will be sorted and written to `data/contributors.md`, where you can copy and paste it to whichever platform you wish to announce top contributors on.

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).
