There are **7** main different queues in Node.js.
Timers Queue
I/O Queue 
Poll Queue
Check Queue
Close Queue
Next Tick Queue
Promise Queue


Timers Queue
Example:
```
setTimeout(() => {
    console.log('This is a callback from the Timers Queue.');
}, 1000);

const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log('This is a callback from the I/O Queue.');
});

```

I/O Queue 
Example:
```
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log('This is a callback from the I/O Queue.');
});

const server = require('http').createServer();
server.on('request', (req, res) => {
    res.end('Hello World!');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

```

Poll Queue
Example:
```
const server = require('http').createServer();
server.on('request', (req, res) => {
    res.end('Hello World!');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

setImmediate(() => {
    console.log('This is a callback from the Check Queue.');
});

```

Check Queue
Example:
```
setImmediate(() => {
    console.log('This is a callback from the Check Queue.');
});

const server = require('http').createServer((req, res) => {
    res.end('Hello World!');
});
server.on('close', () => {
    console.log('This is a callback from the Close Queue.');
});
server.close();

```

Close Queue
Example:
```
const server = require('http').createServer((req, res) => {
    res.end('Hello World!');
});
server.on('close', () => {
    console.log('This is a callback from the Close Queue.');
});
server.close();

process.nextTick(() => {
    console.log('This is a callback from the Next Tick Queue.');
});

```

Next Tick Queue & Promise Queue
Example:
```
process.nextTick(() => {
    console.log('This is a callback from the Next Tick Queue.');
});

Promise.resolve()
    .then(() => {
        console.log('This is a callback from the Promise Queue.');
    });

```

