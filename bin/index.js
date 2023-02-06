const codes = require('../lib/status-codes.json');
const { Command } = require('commander');
const program = new Command();
const { getCode } = require('../lib/Utils.js');
const colors = require('colors/safe');
const clear = require('clear');

program
    .name('http-status-cli')
    .description('A command line tool for looking up HTTP status codes')
    .version('0.0.1');

program
    .command("lookup", { isDefault: true })
    .description("Lookup a status code")
    .argument("<code>", "The code to lookup")
    .option("-s, --short", "Display the short description", false)
    .option("-p, --plain", "Uses Color for printing", false)
    .action((in_code, options) => {
        const isShort = options.short;
        const code = getCode(codes, in_code);

        if (code) {
            colors.enable();
            if(options.plain === true) colors.disable();
            clear()
            if (code.exact) {
                console.log(`${colors.cyan.bold("Found exact match:")}`)
                console.log(`${colors.bgGreen(code.result.code)} » ${colors.green(code.result.phrase)} ${isShort ? "" : `» ${colors.grey(code.result.description)}`}`);
                return;
            }
            if(code.result.length === 0) {
                console.log(`${colors.cyan.bold("No matches found.")}`)
                return;
            }
            console.log(`${colors.cyan.bold("Found multiple matches:")}`)
            code.result.forEach(c => {
                console.log(`${colors.bgGreen(c.code)} » ${colors.green(c.phrase)} ${isShort ? "" : `» ${colors.grey(c.description)}`}`);
            });

            // clear();
            // if (isShort) {
            //     console.log(code.phrase);
            // } else {
            //         console.log(colors.green.bold(code.description));
            // }

        }
    });

program.parse(process.argv);
