const fs = require('fs')
const path = require('path')

// 写日志
function writeLog (writeStream, log) {
  writeStream.write(log + '\n')
}

// 生成write stream
function createWriteStream (fileName) {
  const fullFillName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFillName, { flags: 'a' })
  return writeStream
}

// 写访问日志
const accessWriteStream = createWriteStream('access.log')

function access (log) {
  writeLog(accessWriteStream, log)
}

// 写错误日志
const errorWriteStream = createWriteStream('error.log')

function error (log) {
  writeLog(errorWriteStream, log)
}

// 写事件日志
const eventWriteStream = createWriteStream('event.log')

function event (log) {
  writeLog(eventWriteStream, log)
}

module.exports = {
  access,
  error,
  event
}
