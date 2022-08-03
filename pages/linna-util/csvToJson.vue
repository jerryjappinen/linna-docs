<script setup>
import csvToJson from 'linna-util/csvToJson'

const testCsv = `This,is,some,csv
with,multiple,rows`

const testCsvWithHeaders = `Headers,can,be,parsed
${testCsv}`
</script>

<template>
  <UtilPage
    name="csvToJson"
    args="csvString, parseHeaders, csvParserOptions"
  >
    <Dump :data="testCsv" />
    <Dump :data="csvToJson(testCsv)" />

    <h4>With headers</h4>

    <Dump :data="testCsvWithHeaders" />
    <Dump :data="csvToJson(testCsvWithHeaders, true)" />

  </UtilPage>
</template>
