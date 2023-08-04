for (let i = 2; i < process.argv.length; i++){
  setTimeout((() => {process.stdout.write('\x07');}), (process.argv[i] * 1000));
}