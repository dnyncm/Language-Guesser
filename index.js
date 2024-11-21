import langs from "langs";
import { franc, francAll } from "franc";
//Get input to get language code
const input = process.argv[2];
const lang = franc(`${input}`);
//Get language code to language name
if (lang === 'und') {
    console.log("Sorry, not enough input to evaluate the language.")
} else {
    const result = langs.where("3", `${lang}`);
    console.log(result.name)
}