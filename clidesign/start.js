import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let welcomeTitle = chalkAnimation.rainbow('Only disciplined ones are purely free in life and indisciplined are slaves to their moods and passions');
    await sleep();
    welcomeTitle.stop();
    console.log(chalk.cyanBright(`
██▄ ██ █▄█ ██ █╬ ███ ███ ╬╬ ██▄ █╬█ ╬╬ ██ ███ ███ ██▄ ██ ██ █╬╬█
█╬█ █▄ ███ █▄ █╬ █╬█ █▄█ ╬╬ █▄█ █▄█ ╬╬ █▄ █▄█ █▄╬ █╬█ █▄ █▄ ██▄█
███ █▄ ╬█╬ █▄ ██ █▄█ █╬╬ ╬╬ █▄█ ╬█╬ ╬╬ █╬ █╬█ █╬█ ███ █▄ █▄ █╬██`));
}
;
export { welcome };
