for (let i = 2; i < process.argv.length; i++){
  if (!isNaN(process.argv[i]) && process.argv[i] >= 0 ) {
    setTimeout((() => {process.stdout.write('\x07');}), (process.argv[i] * 1000));
  }
}