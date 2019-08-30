// Default command line arguments
// In order to prevent users from having to enter the options they use every time
// Users can define cucumber.js with profiles which are groups of command line arguments.

module.exports = {
    'default': 'test/features/ --require test/',
    dry: '--dry-run',
    summary: '--format summary',
    progress: '--format progress',
    progress_bar: '--format progress-bar',
    html_report: '--format json:reports/cucumber_report.json',
    parallel: '--parallel 2'
};