#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const schemasDir = path.join(__dirname, '..', 'schemas');

function collectJsonFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectJsonFiles(full));
    } else if (entry.name.endsWith('.json')) {
      files.push(full);
    }
  }
  return files;
}

let errors = 0;
const files = collectJsonFiles(schemasDir);
for (const file of files) {
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log('OK', path.relative(schemasDir, file));
  } catch (e) {
    console.error('FAIL', file, e.message);
    errors++;
  }
}

if (errors > 0) {
  process.exit(1);
}

console.log(`\n${files.length} schemas valid.`);
